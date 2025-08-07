import React, { useState } from "react";
import Head from "next/head";
import { Layout, SocialIcon, Subtitle } from "../components";

import styles from "../styles/Contact.module.css";
import { ButtonForm } from "../components/button/Button";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError("");

    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Head>
        <title>Blessherin | Contact</title>
        <meta
          name="description"
          content="UI/UX Design: (Figma, Canva, Balsamiq, Framer)"
        />
        <meta name="keywords" content="Blessherin, UI/UX Design" />
      </Head>
      <Layout title="Contact">
        <section className={styles.contact}>
          <div className={styles.container}>
            <div className={styles.content}>
              <Subtitle
                text="Contact Me"
                dataAos="fade-right"
                dataAosDuration="1800"
              />
              <h1
                className={styles.title}
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                Get In Touch With Me
              </h1>
              <p
                className={styles.description}
                data-aos="fade-up"
                data-aos-duration="2200"
              >
                I am currently available for projects. Please feel free to use
                this form or email me about your project!
              </p>

              <div
                className={styles.icons}
                data-aos="fade-up"
                data-aos-duration="2400"
              >
                <SocialIcon
                  title="Phone"
                  icon="fa-phone"
                  content="+6288279100585"
                />
                <SocialIcon
                  title="Email"
                  icon="fa-envelope"
                  content="blessherinpangaribuan@gmail.com"
                />
              </div>
            </div>
            <div
              className={styles.form}
              data-aos="zoom-in"
              data-aos-duration="2400"
            >
              <form onSubmit={handleSubmit}>
                <div className={styles.group}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Your message"
                  rows="10"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
                <ButtonForm title={loading ? "Sending..." : "Send"} type="submit" />
                {success && (
                  <p style={{ color: "green" }}>Message sent successfully!</p>
                )}
                {error && <p style={{ color: "red" }}>{error}</p>}
              </form>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;
