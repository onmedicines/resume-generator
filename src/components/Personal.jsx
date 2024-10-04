export default function Personal({ fullName, github, email, linkedin, phoneNumber, cityAndCountry, handleChange }) {
  return (
    <div className="personal-details">
      <header>
        <span>2</span>
        <h1>Personal Details</h1>
      </header>

      <main>
        <label htmlFor="fullName">
          <span>Full Name</span>
          <input type="text" placeholder="Full Name" name="fullName" id="fullName" onChange={handleChange} value={fullName} />
        </label>
        <label htmlFor="github">
          <span>Github</span>
          <input type="text" placeholder="Github" name="github" id="github" onChange={handleChange} value={github} />
        </label>
        <label htmlFor="email">
          <span>Email</span>
          <input type="email" placeholder="Email" name="email" id="email" onChange={handleChange} value={email} />
        </label>
        <label htmlFor="linkedin">
          <span>Linkedin</span>
          <input type="text" placeholder="LinkedIn" name="linkedin" id="linkedin" onChange={handleChange} value={linkedin} />
        </label>
        <label htmlFor="phone">
          <span>Phone</span>
          <input type="number" maxLength={10} placeholder="Phone number" name="phoneNumber" id="phone" onChange={handleChange} value={phoneNumber} />
        </label>
        <label htmlFor="city">
          <span>City and Country</span>
          <input type="text" placeholder="City, Country" name="cityAndCountry" id="city" onChange={handleChange} value={cityAndCountry} />
        </label>
      </main>
    </div>
  );
}
