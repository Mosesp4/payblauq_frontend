import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap"
import app from "firebase";
import { useAuth } from "./AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
  
    async function handleGoogleSignIn() {
      try {
        setError("");
        setLoading(true);
  
        const provider = new app.auth.GoogleAuthProvider();
        await loginWithPopup(provider);
  
       navigate("/profile");
      } catch {
        setError("Failed to log in with Google");
      }
  
      setLoading(false);
    }
  
    async function loginWithPopup2(provider) {
      try {
        await app.auth().signInWithPopup(provider);
      } catch (error) {
        console.error("Error signing in with Google:", error);
      }
    }
    async function handleGitHubSignIn() {
      try {
        setError("");
        setLoading(true);
  
        const provider = new app.auth.GithubAuthProvider();
        await loginWithPopup2(provider);
  
       navigate("/profile");
      } catch {
        setError("Failed to log in with GitHub");
      }
  
      setLoading(false);
    }
  
    async function loginWithPopup(provider) {
      try {
        await app.auth().signInWithPopup(provider);
      } catch (error) {
        console.error("Error signing in with GitHub:", error);
      }
    }
    async function handleSubmit(e) {
      e.preventDefault()
  
      try {
        setError("")
        setLoading(true)
        await login(emailRef.current.value, passwordRef.current.value)

        navigate("/profile");
      } catch {
        setError("Failed to log in")
      }
  
      setLoading(false)
    }

    return (
        <>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Log In</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required />
              </Form.Group>
               <Button disabled={loading} className="w-100" type="submit">
              Log In
            </Button>
            <Button onClick={handleGoogleSignIn}
          className="w-100 mt-3 btn-google"
          disabled={loading}
        >
          <FontAwesomeIcon icon={faGoogle} className="icon" />
          Sign In with Google
        </Button>
          <Button
            onClick={handleGitHubSignIn}
            className="w-100 mt-3 btn-github"
            disabled={loading}
          >
            <FontAwesomeIcon icon={faGithub} className="icon" />
            Sign In with GitHub
          </Button>
  
            </Form>
            <div className="w-100 text-center mt-3">
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Need an account? <Link to="/signup">Sign Up</Link>
        </div>
      </>
    )
  }
  