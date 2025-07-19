import React, { useState } from 'react';
import styles from '../styles/earlyaccessform.module.scss';

const industries = [
 '',
 'Technology',
 'Finance',
 'Healthcare',
 'Education',
 'Legal',
 'Real Estate',
 'Marketing',
 'Other',
];

const EarlyAccessForm = ({ initialEmail = '', onSubmit }) => {
 const [email, setEmail] = useState(initialEmail);
 const [industry, setIndustry] = useState('');
 const [workflow, setWorkflow] = useState('');
 const [touched, setTouched] = useState(false);
 const [loading, setLoading] = useState(false);
 const [error, setError] = useState('');
 const [showError, setShowError] = useState(false);
 const [success, setSuccess] = useState(false);
 const [expand, setExpand] = useState(false);

 const handleSubmit = async (e) => {
  e.preventDefault();
  setTouched(true);
  setError('');
  setShowError(false);
  if (!email) return;
  setLoading(true);
  try {
   const res = await fetch('https://testbed.ritease.com/api/waitlist', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, industry, workflow }),
   });
   if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data.message || 'Failed to join waitlist');
   }
   setSuccess(true);
   setLoading(false);
   onSubmit && onSubmit({ email, industry, workflow });
  } catch (err) {
   setError(err.message || 'Something went wrong');
   setShowError(true);
   setLoading(false);
  }
 };

 if (success) {
  return (
   <div className={styles.successContainer}>
    <svg
     className={styles.successIcon}
     viewBox='0 0 64 64'
     width='64'
     height='64'
     fill='none'
     xmlns='http://www.w3.org/2000/svg'
    >
     <circle cx='32' cy='32' r='32' fill='#1a7f37' />
     <path
      d='M20 34L29 43L44 25'
      stroke='#fff'
      strokeWidth='4'
      strokeLinecap='round'
      strokeLinejoin='round'
     />
    </svg>
    <div
     className={styles.successText}
     style={{
      color: '#1a7f37',
      fontFamily: 'Inter, sans-serif',
      fontWeight: 700,
     }}
    >
     You’re on the waitlist!
    </div>
    <div
     className={styles.successSubtext}
     style={{
      color: '#1a7f37',
      fontFamily: 'Inter, sans-serif',
      fontWeight: 500,
     }}
    >
     Thank you for joining. We’ll keep you updated!
    </div>
   </div>
  );
 }

 if (showError) {
  return (
   <div className={styles.errorContainer}>
    <svg
     className={styles.errorIcon}
     viewBox='0 0 64 64'
     width='64'
     height='64'
     fill='none'
     xmlns='http://www.w3.org/2000/svg'
    >
     <circle cx='32' cy='32' r='32' fill='#1a7f37' />
     <path
      d='M20 20L44 44M44 20L20 44'
      stroke='#fff'
      strokeWidth='4'
      strokeLinecap='round'
     />
    </svg>
    <div
     className={styles.errorText}
     style={{
      color: '#1a7f37',
      fontFamily: 'Inter, sans-serif',
      fontWeight: 700,
     }}
    >
     Something went wrong
    </div>
    <div
     className={styles.errorSubtext}
     style={{
      color: '#1a7f37',
      fontFamily: 'Inter, sans-serif',
      fontWeight: 500,
     }}
    >
     {error}
    </div>
    <button className={styles.tryAgainBtn} onClick={() => setShowError(false)}>
     Try Again
    </button>
   </div>
  );
 }

 return (
  <form className={styles.popupForm} onSubmit={handleSubmit}>
   <h2 className={styles.popupHeading}>
    Get early access by joining our waitlist
   </h2>
   {!expand ? (
    <div className={styles.inputWrapper}>
     <input
      type='email'
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
      className={touched && !email ? styles.invalid : ''}
      placeholder='enter your email'
      disabled={loading}
      aria-label='Email address'
     />
     <button
      className={styles.inputButtonInside}
      type='submit'
      disabled={loading}
     >
      {loading ? <span className={styles.spinner}></span> : 'Join waitlist'}
     </button>
    </div>
   ) : (
    <>
     <div className={styles.inputRow}>
      <input
       type='email'
       value={email}
       onChange={(e) => setEmail(e.target.value)}
       required
       className={touched && !email ? styles.invalid : ''}
       placeholder='enter your email'
       disabled={loading}
       aria-label='Email address'
      />
      {expand && (
       <div id='extraFields' className={styles.extraFields}>
        <label htmlFor='industry'>Industry</label>
        <select
         id='industry'
         value={industry}
         onChange={(e) => setIndustry(e.target.value)}
         className={styles.select}
         disabled={loading}
        >
         <option value=''>Select your industry</option>
         {industries.slice(1).map((ind, i) => (
          <option key={i} value={ind}>
           {ind}
          </option>
         ))}
        </select>
        <label htmlFor='workflow'>
         How can Ritease help your workflow? (optional)
        </label>
        <textarea
         id='workflow'
         value={workflow}
         onChange={(e) => setWorkflow(e.target.value)}
         placeholder='Tell us how Ritease can help you...'
         rows={3}
         disabled={loading}
        />
       </div>
      )}
     </div>
     <button className={styles.inputButton} type='submit' disabled={loading}>
      {loading ? <span className={styles.spinner}></span> : 'Join waitlist'}
     </button>
    </>
   )}
   <button
    type='button'
    className={styles.expandBtn}
    onClick={() => setExpand((v) => !v)}
    aria-expanded={expand}
    aria-controls='extraFields'
   >
    {expand ? 'Hide extra questions' : 'Add more info (optional)'}
   </button>
   <div className={styles.subtext}>
    By joining the waitlist, you agree to our
    <a href='/privacy' target='_blank' rel='noopener noreferrer'>
     Privacy Policy
    </a>
   </div>
   {error && !showError && <div className={styles.error}>{error}</div>}
  </form>
 );
};

export default EarlyAccessForm;
