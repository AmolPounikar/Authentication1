import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
<footer className="bg-dark text-center text-white">
  <div className="container p-4">
    <section className="mb-4">
      <Link className="btn btn-outline-light btn-floating m-1" to="/" role="button"
        ><i className="fab fa-facebook-f"></i
      ></Link>

      <Link className="btn btn-outline-light btn-floating m-1" to="/" role="button"
        ><i className="fab fa-twitter"></i
      ></Link>

      <Link className="btn btn-outline-light btn-floating m-1" to="/" role="button"
        ><i className="fab fa-google"></i
      ></Link>

      <Link className="btn btn-outline-light btn-floating m-1" to="/" role="button"
        ><i className="fab fa-instagram"></i
      ></Link>

      <Link className="btn btn-outline-light btn-floating m-1" to="/" role="button"
        ><i className="fab fa-linkedin-in"></i
      ></Link>

      <Link className="btn btn-outline-light btn-floating m-1" to="/" role="button"
        ><i className="fab fa-github"></i
      ></Link>
    </section>

    <section className="mb-4">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
        repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
        eum harum corrupti dicta, aliquam sequi voluptate quas.
      </p>
    </section>

    <section className="">
    
    </section>
  </div>

  <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
    © 2020 Copyright:
    <Link className="text-white" to="/tps://mdbootstrap.com/">MDBootstrap.com</Link>
  </div>
</footer>
    </>
  )
}
