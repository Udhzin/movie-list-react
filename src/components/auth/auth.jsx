import React, { Component, createRef } from 'react';
import { Button, Modal } from 'react-bootstrap';

class InputField extends Component {
    render() {
        const { label, type, value, onChange } = this.props;

        return (
            <div className="md-form mb-5">
                <label data-error="wrong" data-success="right" htmlFor={`defaultForm-${type}`}>
                    {label}
                </label>
                <input
                    type={type}
                    className="form-control validate"
                    id={`defaultForm-${type}`}
                    value={value}
                    onChange={onChange}
                />
            </div>
        );
    }
}

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            email: '',
            password: '',
        };
        this.modalRef = createRef(); // Create a ref for Modal
    }

    signIn = async () => {
        // try {
        //   await createUserWithEmailAndPassword(auth, this.state.email, this.state.password);
        // } catch (err){
        //   console.error(err);
        // }
    };

    signInWithGoogle = async () => {
        // try {
        //   await signInWithPopup(auth, googleProvider);
        // } catch (err){
        //   console.error(err);
        // }
    };

    logOut = async () => {
        // try {
        //   await signOut(auth);
        // } catch (err){
        //   console.error(err);
        // }
    };

    componentDidMount() {
        // No need to initialize Firebase here since it's now done at the top level
    }

    handleShow = () => this.setState({ show: true });
    handleClose = () => this.setState({ show: false });

    render() {
        const { show, email, password } = this.state;

        return (
            <>
                <Button variant="default" onClick={this.handleShow}>
                    Sign In / Sign Up
                </Button>

                <Modal ref={this.modalRef} show={show} onHide={this.handleClose} backdrop="static" keyboard={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Sign in</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <InputField label="Your email" type="email" value={email} onChange={(e) => this.setState({ email: e.target.value })} />
                        <InputField
                            label="Your password"
                            type="password"
                            value={password}
                            onChange={(e) => this.setState({ password: e.target.value })}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.signIn}>
                            Sign In
                        </Button>
                        <Button variant="primary" onClick={this.signInWithGoogle}>
                            Sign In with Google
                        </Button>
                        <Button variant="warning" onClick={this.logOut}>
                            Log Out
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default Auth;
