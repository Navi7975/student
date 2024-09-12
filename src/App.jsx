import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [activeTable, setActiveTable] = useState(null);
  const [activeForm, setActiveForm] = useState(null);

  const showTable = (tableId) => {
    console.log("Show table:", tableId);  // Debug log for button click
    setActiveTable(tableId);
    setActiveForm(null);  // Hide the form if table is active
  };

  const showPopupForm = (formId) => {
    console.log("Show form:", formId);  // Debug log for button click
    setActiveForm(formId);
    setActiveTable(null);  // Hide the table if form is active
  };

  const hidePopup = () => {
    console.log("Hide popup");  // Debug log for hiding the popup
    setActiveTable(null);
    setActiveForm(null);
  };

  const saveForm = () => {
    alert('Form Saved!');
    hidePopup();
  };

  return (
    <div className="std-main-container">
      {/* Cards */}
      <div className="std-card-container">
        <div className="std-card">
          <h3>Personal Details</h3>
          <i className="fas fa-eye std-view-icon" onClick={() => showTable('student-detail')}></i>
          <i className="fas fa-pen std-edit-icon" onClick={() => showPopupForm('personal-details-form')}></i>
        </div>
        <div className="std-card">
          <h3>Education Information</h3>
          <i className="fas fa-eye std-view-icon" onClick={() => showTable('education-info')}></i>
          <i className="fas fa-pen edit-icon" onClick={() => showPopupForm('education-info-form')}></i>
        </div>
        <div className="std-card">
          <h3>Faculty</h3>
          <i className="fas fa-eye std-view-icon" onClick={() => showTable('faculty-info')}></i>
          <i className="fas fa-pen  std-edit-icon" onClick={() => showPopupForm('faculty-info-form')}></i>
        </div>
        <div className="std-card">
          <h3>Industry Facilitator</h3>
          <i className="fas fa-eye std-view-icon" onClick={() => showTable('industry-facilitator')}></i>
          <i className="fas fa-pen  std-edit-icon" onClick={() => showPopupForm('industry-facilitator-form')}></i>
        </div>
        <div className="std-card">
          <h3>Internship Details</h3>
          <i className="fas fa-eye std-view-icon" onClick={() => showTable('internship-details')}></i>
          <i className="fas fa-pen std-edit-icon" onClick={() => showPopupForm('internship-details-form')}></i>
        </div>
      </div>

      {/* Popup Tables - Conditional rendering based on activeTable */}
      {activeTable && (
        <div className="std-popup-table" onClick={hidePopup}>
          <div className="std-table-content" onClick={(e) => e.stopPropagation()}>

            {activeTable === 'student-detail' && (
              <>
                <h4>Student Detail Table</h4>
                <table>
                  <tbody>
                    <tr>
                      <td>Name:</td>
                      <td>USN ID:</td>
                      <td>University</td>
                    </tr>
                    <tr>
                      <td>College Name:</td>
                      <td>Department:</td>
                      <td>Semester:</td>
                    </tr>
                    <tr>
                      <td>Email ID:</td>
                      <td>Phone:</td>
                      <td>Aadhar :</td>
                    </tr>
                    <tr>
                      <td>Address:</td>
                      <td colspan="2"></td>
                    </tr>
                    <tr>
                      <td>Aadhar Proof Attachment:</td>
                      <td colspan="2"></td>
                    </tr>
                    <tr>
                      <td>Passport Photo:</td>
                      <td colspan="2"></td>
                    </tr>
                  </tbody>
                </table>
              </>
            )}
            {activeTable === 'education-info' && (
              <>
                <h4>Education Information Table</h4>
                <table>
                  <tbody>
                    <tr>
                      <td colspan="3">University:</td>
                    </tr>
                    <tr>
                      <td>Degree Status:</td>
                      <td>College:</td>
                      <td>Degree:</td>
                    </tr>
                    <tr>
                      <td>Branch:</td>
                      <td colspan="2">Semester:</td>
                    </tr>
                    <tr>
                      <td>USN:</td>
                      <td colspan="2">CGPA:</td>
                    </tr>
                    <tr>
                      <td colspan="3">10th Board School Name:</td>
                    </tr>
                    <tr>
                      <td>Board Details:</td>
                      <td>10th Passing Year:</td>
                      <td>10th Percentage</td>
                    </tr>
                    <tr>
                      <td colspan="3">12th Board College Name:</td>
                    </tr>
                    <tr>
                      <td>12th Passing Year:</td>
                      <td colspan="2">12th Percentage:</td>
                    </tr>
                    <tr>
                      <td>Resume:</td>
                      <td colspan="2">Cover Letter:</td>
                    </tr>
                    <tr>
                      <td colspan="3">1.5 Mins Self Introduction Video:</td>
                    </tr>
                  </tbody>
                </table>
              </>
            )}



            {activeTable === 'faculty-info' && (
              <>
                <h4> Faculty Information</h4>
                <table>
                  <tbody>
                    <tr>
                      <td colspan="3">Head of Department (HOD) Name:</td>
                    </tr>
                    <tr>
                      <td>HOD Email Address:</td>
                      <td>Faculty Name:</td>
                      <td>Faculty Email:</td>
                    </tr>
                    <tr>
                      <td>Department:</td>
                      <td>Phone:</td>
                      <td>Fax:</td>
                    </tr>
                  </tbody>
                </table>
              </>
            )}



            {activeTable === 'industry-facilitator' && (
              <>
                <h4>industry facilitator</h4>
                <table>
                  <tbody>
                    <tr>
                      <td colspan="3">Industry Name:</td>
                    </tr>
                    <tr>
                      <td colspan="3">Industry Mentor Name:</td>
                    </tr>
                    <tr>
                      <td colspan="3">Industry Mentor Official email ID:</td>
                    </tr>
                    <tr>
                      <td colspan="2">Project Name:</td>
                      <td>Core Area:</td>
                    </tr>
                  </tbody>
                </table>
              </>
            )}



            {activeTable === 'internship-details' && (
              <>
                <h4>Internship Details </h4>
                <table>
                  <tbody>
                    <tr>
                      <td colspan="3">Internship Preferences:</td>
                    </tr>
                    <tr>
                      <td colspan="3">Learning Objectives:</td>
                    </tr>
                    <tr>
                      <td colspan="3">Technical Skills:</td>
                    </tr>
                    <tr>
                      <td colspan="3">Internship Activities:</td>
                    </tr>
                    <tr>
                      <td colspan="3">Evidence to Faculty:</td>
                    </tr>
                  </tbody>
                </table>
              </>
            )}
            {/* Add more tables as needed */}
          </div>
        </div>
      )}

      {/* Popup Forms - Conditional rendering based on activeForm */}
      {activeForm && (
        <div className="std-popup-form">
          <div className="std-form-container">

            <h3>{activeForm.replace('-form', '').replace(/-/g, ' ').toUpperCase()}</h3>

            {activeForm === 'personal-details-form' && (
              <>
                <form>
                  <div className="std-form-field">
                    <label for="name">Name:</label>
                    <input id="name" type="text" required />
                  </div>

                  <div className="std-form-field">
                    <label for="dob">Date of Birth:</label>
                    <input id="dob" type="date" required />
                  </div>

                  <div className="std-form-field">
                    <label for="address">Address:</label>
                    <textarea id="address" rows="4" required></textarea>
                  </div>

                  <div class="std-form-field">
                    <label for="aadhar">Aadhar Number:</label>
                    <input id="aadhar" type="number" required />
                  </div>

                  <div className="std-form-field">
                    <label for="gender">Gender:</label>
                    <select id="gender" required>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="std-form-field">
                    <label for="phone">Phone Number:</label>
                    <input id="phone" type="number" required />
                  </div>

                  <div className="std-form-field">
                    <label for="photo">Photo:</label>
                    <input id="photo" type="file" accept="image/*" required />
                  </div>

                  <div className="std-form-field">
                    <label for="email">Email:</label>
                    <input id="email" type="email" required />
                  </div>

                  <div className="std-form-field">
                    <label for="signature">Digital Signature:</label>
                    <input id="signature" type="file" accept=".png, .jpg, .jpeg" required />
                  </div>
                  <div className="std-form-buttons">
                    <button type="button" className="std-save-btn" onClick={saveForm}>Save</button>
                    <button type="button" className="std-back-btn" onClick={hidePopup}>Back</button>
                  </div>
               
              </form>
              </>
            )}








{activeForm === 'education-info-form' && (
              <>
                <form>
                  <div className="std-form-field">
                    <label for="name">University:</label>
                    <input id="name" type="text" required />
                  </div>

                 

                  

                  <div class="std-form-field">
                    <label for="aadhar">Degree Status:</label>
                    <input id="aadhar" type="text" required />
                  </div>

                  

                  <div className="std-form-field">
                    <label for="phone">College:</label>
                    <input id="phone" type="text" required />
                  </div>

                  <div className="std-form-field">
                    <label for="phone">Degree:</label>
                    <input id="phone" type="text" required />
                  </div>

                 
                  <div className="std-form-field">
                    <label for="phone">Branch:</label>
                    <input id="phone" type="text" required />
                  </div>

                  <div className="std-form-field">
                    <label for="phone">Semester:</label>
                    <input id="phone" type="number" required />
                  </div>

                  <div className="std-form-field">
                    <label for="phone">USN:</label>
                    <input id="phone" type="text" required />
                  </div>

                  <div className="std-form-field">
                    <label for="phone">CGPA:</label>
                    <input id="phone" type="number" required />
                  </div>

                  <div className="std-form-field">
                    <label for="email">10th board School Name:</label>
                    <input id="email" type="text" required />
                  </div>

                  <div className="std-form-field">
                    <label for="email">Board Detail:</label>
                    <input id="email" type="text" required />
                  </div>

                  <div className="std-form-field">
                    <label for="email">10th Passing Year:</label>
                    <input id="email" type="number" required />
                  </div>

                  
                  <div className="std-form-field">
                    <label for="email">10th Percentage: </label>
                    <input id="email" type="number" required />
                  </div>

                  
                  <div className="std-form-field">
                    <label for="email">12th Board College Name:  </label>
                    <input id="email" type="text" required />
                  </div>

                  
                  <div className="std-form-field">
                    <label for="email">12th Board College Name:</label>
                    <input id="email" type="text" required />
                  </div>

                  <div className="std-form-field">
                    <label for="email"> 12th Passing Year </label>
                    <input id="email" type="number" required />
                  </div>

                  <div className="std-form-field">
                    <label for="email">12th Percentage  </label>
                    <input id="email" type="number" required />
                  </div>



                  <div className="std-form-field">
                    <label for="signature">Resume:</label>
                    <input id="signature" type="file" accept=".png, .jpg, .jpeg" required />
                  </div>

                  <div className="std-form-field">
                    <label for="signature">Cover Letter:</label>
                    <input id="signature" type="file" accept=".png, .jpg, .jpeg" required />
                  </div>


                  <div className="std-form-field">
                    <label for="signature">1.5 min self Introduction Video:</label>
                    <input id="signature" type="file" accept=".mp4" required />
                  </div>

                  <div className="std-form-buttons">
                    <button type="button" className="std-save-btn" onClick={saveForm}>Save</button>
                    <button type="button" className="std-back-btn" onClick={hidePopup}>Back</button>
                  </div>
               
              </form>
              </>
            )}









{activeForm === 'faculty-info-form' && (
              <>
                <form>
                  <div className="std-form-field">
                    <label for="name">Head of the Department(HOD) Name:</label>
                    <input id="name" type="text" required />
                  </div>

                  <div className="std-form-field">
                    <label for="name">HOD Email Address:</label>
                    <input id="name" type="text" required />
                  </div>

                  <div className="std-form-field">
                    <label for="name">Faculty Name:</label>
                    <input id="name" type="text" required />
                  </div>

                  <div className="std-form-field">
                    <label for="name">Faculty Email:</label>
                    <input id="name" type="text" required />
                  </div>


                  <div className="std-form-field">
                    <label for="name">Department:</label>
                    <input id="name" type="text" required />
                  </div>



                  

                  <div class="std-form-field">
                    <label for="aadhar">Phone Number:</label>
                    <input id="aadhar" type="number" required />
                  </div>


                  <div class="std-form-field">
                    <label for="aadhar">FAX:</label>
                    <input id="aadhar" type="number" required />
                  </div>
                  

                 

      
                  <div className="std-form-buttons">
                    <button type="button" className="std-save-btn" onClick={saveForm}>Save</button>
                    <button type="button" className="std-back-btn" onClick={hidePopup}>Back</button>
                  </div>
               
              </form>
              </>
            )}







{activeForm === 'industry-facilitator-form' && (
              <>
                <form>
                  <div className="std-form-field">
                    <label for="name">Industry Name:</label>
                    <input id="name" type="text" required />
                  </div>

                  <div className="std-form-field">
                    <label for="name">Industry Mentor Name:</label>
                    <input id="name" type="text" required />
                  </div>

                  <div className="std-form-field">
                    <label for="name">Industry Mentor Official Email ID:</label>
                    <input id="name" type="text" required />
                  </div>

                  <div className="std-form-field">
                    <label for="name">Project Name:</label>
                    <input id="name" type="text" required />
                  </div>

                  <div className="std-form-field">
                    <label for="name">Core Area:</label>
                    <input id="name" type="text" required />
                  </div>
                  <div className="std-form-buttons">
                    <button type="button" className="std-save-btn" onClick={saveForm}>Save</button>
                    <button type="button" className="std-back-btn" onClick={hidePopup}>Back</button>
                  </div>
               
              </form>
              </>
            )}





{activeForm === 'internship-details-form' && (
              <>
                <form>
                  <div className="std-form-field">
                    <label for="name">Internship Preferences: </label>
                    <input id="name" type="text" required />
                  </div>

                  <div className="std-form-field">
                    <label for="name">Learn Objectives: </label>
                    <input id="name" type="text" required />
                  </div>

                  <div className="std-form-field">
                    <label for="name">Technical Skills: </label>
                    <input id="name" type="text" required />
                  </div>

                  <div className="std-form-field">
                    <label for="name">Internship Activities: </label>
                    <input id="name" type="text" required />
                  </div>


                  <div className="std-form-field">
                    <label for="name">Evidence to Faculty: </label>
                    <input id="name" type="text" required />
                  </div>
                  <div className="std-form-buttons">
                    <button type="button" className="std-save-btn" onClick={saveForm}>Save</button>
                    <button type="button" className="std-back-btn" onClick={hidePopup}>Back</button>
                  </div>
               
              </form>
              </>
            )}

          </div>
        </div>
      )}
    </div>
  );
}

export default App;
