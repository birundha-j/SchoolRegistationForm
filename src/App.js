import React, { useState } from "react";
import { useCallback } from "react";
import './App.css';
const initialValues = {
  firstname: "", dob: "", lastname: "", gender: "", fathername: "", fatherwork: "", motherwork: "", mothername: "", address: "", city: "", state: "", district: "", pincode: "", contact: ""
};

// const From_key = [
//   "firstname", "dob", "lastname", "gender", "fathername", "fatherwork", "motherwork", "mothername", "address", "city", "state", "district", "pincode", "contact"
// ];

function App() {
  const [values, setValues] = useState(initialValues);
  const [required, setRequired] = useState(false)
  const [showList, setShowList] = useState()
  const [emptydata, setEmptydata] = useState([])
  const [showAddData, setShowAddData] = useState([])


  const handleInputChange = (e) => {
    const { name, value, id } = e.target;
    if (name === "gender") {
      setValues({
        ...values,
        [name]: id,
      });
    } else {
      setValues({
        ...values,
        [name]: value,
      });
    }
    setEmptydata([])
  };

  const applyDetails = (e) => {
    e.preventDefault()
    Object.keys(initialValues).map((data) => {
      if (values[data] === "") {
        emptydata.push(data)
        setRequired(true)
      }
    });

    if (!Object.keys(initialValues).every((tr) => values[tr] !== "")) {
      return
    }

    setShowAddData([...showAddData, values])
    setValues(initialValues)
  }

  const viewList = () => {
    setShowList(true)
  }

  const clearData = useCallback((e) => {
    e.preventDefault()
    setValues(initialValues)
  }, [values])

  return (
    <div className="Container">
      {showList ?
        <div className="showContent">
          <div className="contentTitle">Student Registation List</div>
          {showAddData && showAddData.map((data, index) => {
            return (
              <div className="showListcontainer">
                <div className="indexvalue">Applicant :{index + 1}</div>
                <div className="viewaddList">
                  <label className="lablelist">First Name</label>{"  :   "}<div className="datalist">{data.firstname}</div>
                </div>
                <div className="viewaddList">
                  <label className="lablelist">Last Name</label>{"  :   "}<div className="datalist">{data.lastname}</div>
                </div>
                <div className="viewaddList">
                  <label className="lablelist">Date Of Birth</label>{"  :   "}<div className="datalist">{data.dob}</div>
                </div>
                <div className="viewaddList">
                  <label className="lablelist">Gender</label>{"  :   "}<div className="datalist">{data.gender == 1 ? "Male" : "Female"}</div>
                </div>
                <div className="viewaddList">
                  <label className="lablelist">Father's Name</label>{"  :   "}<div className="datalist">{data.fathername}</div>
                </div>
                <div className="viewaddList">
                  <label className="lablelist">Father's Occupation</label>{"  :   "}<div className="datalist">{data.fatherwork}</div>
                </div>
                <div className="viewaddList">
                  <label className="lablelist">Mother's Name</label>{"  :   "}<div className="datalist">{data.mothername}</div>
                </div>
                <div className="viewaddList">
                  <label className="lablelist">Mother's Occupation</label>{"  :   "}<div className="datalist">{data.motherwork}</div>
                </div>
                <div className="viewaddList">
                  <label className="lablelist">Address</label>{"  :   "}<div className="datalist">{data.address}</div>
                </div>
                <div className="viewaddList">
                  <label className="lablelist">City</label>{"  :   "}<div className="datalist">{data.city}</div>
                </div>
                <div className="viewaddList">
                  <label className="lablelist">District</label>{"  :   "}<div className="datalist">{data.district}</div>
                </div>
                <div className="viewaddList">
                  <label className="lablelist">State</label>{"  :   "}<div className="datalist">{data.state}</div>
                </div>
                <div className="viewaddList">
                  <label className="lablelist">Pincode</label>{"  :   "}<div className="datalist">{data.pincode}</div>
                </div>
                <div className="viewaddList">
                  <label className="lablelist">Contact Number</label>{"  :   "}<div className="datalist">{data.contact}</div>
                </div>
              </div>
            )
          })}
          <div className="backbtn">
            <button className="backbuttonview" onClick={() => setShowList(false)}>Back</button>
          </div>
        </div>
        :
        <div className="content">
          <div className="contentTitle">Student Registation Form</div>
          <form>
            <div className="formContainer">
              <div className="formFields">
                <div className="inputboxshow">
                  <label className="lableview">First Name<div className="starView">*</div></label>
                  <div>
                    <input value={values.firstname} onChange={handleInputChange} type="text" name="firstname" className={required && emptydata.includes("firstname") ? "inputboxvalid" : "inputbox"} />
                  </div>
                  <div>{required && emptydata.includes("firstname") && <div className="errorMessege">Field required</div>}</div>
                </div>
                <div className="inputboxshow">
                  <label className="lableview">Last Name<div className="starView">*</div></label>
                  <div>
                    <input value={values.lastname} onChange={handleInputChange} type="text" name="lastname" className={required && emptydata.includes("lastname") ? "inputboxvalid" : "inputbox"} />
                  </div>
                  <div>{required && emptydata.includes("lastname") && <div className="errorMessege">Field required</div>}</div>
                </div>
              </div>
              <div className="formFields">
                <div className="inputboxshow">
                  <label className="lableview">D.O.B<div className="starView">*</div></label>
                  <div>
                    <input value={values.dob} onChange={handleInputChange} type="date" name="dob" className={required && emptydata.includes("dob") ? "inputboxvalid" : "inputbox"} />
                  </div>
                  <div>{required && emptydata.includes("dob") && <div className="errorMessege">Field required</div>}</div>
                </div>
                <div className="inputboxshow">
                  <label className="lableview">Gender<div className="starView">*</div></label>
                  <div className="radiobtn">
                    <div className="radiobutton">
                      <input value={values.gender} onChange={handleInputChange} type="radio" name="gender" id="1" /><label >Male</label>
                    </div>
                    <div className="radiobutton">
                      <input value={values.gender} onChange={handleInputChange} type="radio" name="gender" id="2" /> <label >Female</label>
                    </div>
                  </div>
                  <div>{required && emptydata.includes("gender") && <div className="errorMessege">Field required</div>}</div>

                </div>
              </div>
              <div className="formFields">
                <div className="inputboxshow">
                  <label className="lableview">Father's Name<div className="starView">*</div></label>
                  <div>
                    <input value={values.fathername} onChange={handleInputChange} type="text" name="fathername" className={required && emptydata.includes("fathername") ? "inputboxvalid" : "inputbox"} />
                  </div>
                  <div>{required && emptydata.includes("fathername") && <div className="errorMessege">Field required</div>}</div>

                </div>
                <div className="inputboxshow">
                  <label className="lableview">Father's Occupation<div className="starView">*</div></label>
                  <div>
                    <input value={values.fatherwork} onChange={handleInputChange} type="text" name="fatherwork" className={required && emptydata.includes("fatherwork") ? "inputboxvalid" : "inputbox"} />
                  </div>
                  <div>{required && emptydata.includes("fatherwork") && <div className="errorMessege">Field required</div>}</div>

                </div>
              </div>
              <div className="formFields">
                <div className="inputboxshow">
                  <label className="lableview">Mother's Name<div className="starView">*</div></label>
                  <div>
                    <input value={values.mothername} onChange={handleInputChange} type="text" name="mothername" className={required && emptydata.includes("mothername") ? "inputboxvalid" : "inputbox"} />
                  </div>
                  <div>{required && emptydata.includes("mothername") && <div className="errorMessege">Field required</div>}</div>
                </div>
                <div className="inputboxshow">
                  <label className="lableview">Mother's Occupation<div className="starView">*</div></label>
                  <div>
                    <input value={values.motherwork} onChange={handleInputChange} type="text" name="motherwork" className={required && emptydata.includes("motherwork") ? "inputboxvalid" : "inputbox"} />
                  </div>
                  <div>{required && emptydata.includes("motherwork") && <div className="errorMessege">Field required</div>}</div>
                </div>
              </div>
              <div className="formFields">
                <div className="inputboxshow">
                  <label className="lableview">Address<div className="starView">*</div></label>
                  <div>
                    <input value={values.address} onChange={handleInputChange} type="text" name="address" className={required && emptydata.includes("address") ? "inputboxvalid" : "inputboxaddress"} />
                  </div>
                  <div>{required && emptydata.includes("address") && <div className="errorMessege">Field required</div>}</div>
                </div>
              </div>
              <div className="formFields">
                <div className="inputboxshow">
                  <label className="lableview">City<div className="starView">*</div></label>
                  <div> <input value={values.city} onChange={handleInputChange} type="text" name="city" className={required && emptydata.includes("city") ? "inputboxvalid" : "inputbox"} />
                  </div>
                  <div>{required && emptydata.includes("city") && <div className="errorMessege">Field required</div>}</div>
                </div>
                <div className="inputboxshow">
                  <label className="lableview">District<div className="starView">*</div></label>
                  <div>
                    <input value={values.district} onChange={handleInputChange} type="text" name="district" className={required && emptydata.includes("district") ? "inputboxvalid" : "inputbox"} />
                  </div>
                  <div>{required && emptydata.includes("district") && <div className="errorMessege">Field required</div>}</div>
                </div>
              </div>
              <div className="formFields">
                <div className="inputboxshow">
                  <label className="lableview">State<div className="starView">*</div></label>
                  <div>
                    <input value={values.state} onChange={handleInputChange} type="text" name="state" className={required && emptydata.includes("state") ? "inputboxvalid" : "inputbox"} />
                  </div>
                  <div>{required && emptydata.includes("state") && <div className="errorMessege">Field required</div>}</div>
                </div>
                <div className="inputboxshow">
                  <label className="lableview">Pincode<div className="starView">*</div></label>
                  <div>
                    <input value={values.pincode} onChange={handleInputChange} type="text" name="pincode" className={required && emptydata.includes("pincode") ? "inputboxvalid" : "inputbox"} />
                  </div>
                  <div>{required && emptydata.includes("pincode") && <div className="errorMessege">Field required</div>}</div>
                </div>
              </div>
              <div className="formFields">
                <div className="inputboxshow">
                  <label className="lableview">Contact Number<div className="starView">*</div></label>
                  <div>
                    <input value={values.contact} onChange={handleInputChange} type="number" name="contact" className={required && emptydata.includes("contact") ? "inputboxvalid" : "inputbox"} />
                  </div>
                  <div>{required && emptydata.includes("contact") && <div className="errorMessege">Field required</div>}</div>
                </div>
                <div className="inputboxshow">
                  <div className="btnshow">
                    <button className="buttonview" onClick={(e) => applyDetails(e)}>Submit</button>
                    <button className="buttonview" onClick={(e) => clearData(e)}>Clear</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
          {showAddData && showAddData.length > 0 ? <div className="viewList" onClick={viewList}>View Appications</div> : ""}
        </div>

      }


    </div>
  );
}

export default App;
