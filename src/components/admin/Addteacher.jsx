
"use client";

import React, { useState, useEffect } from "react";
import supabase from "@/utils/client";

function Addteacher({ onClose, teacher, onSave }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("Male");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (teacher) {
      setFullName(teacher.Fullname);
      setEmail(teacher.Email);
      setContact(teacher.Contact);
      setAddress(teacher.Address);
      setDob(teacher.DOB);
      setGender(teacher.Gender);
      setUsername(teacher.username);
      setPassword(teacher.password);
    }
  }, [teacher]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let data, error;
      if (teacher) {
        // Update existing teacher
        const { data: updateData, error: updateError } = await supabase
          .from('teachers')
          .update({
            Fullname: fullName,
            Email: email,
            Contact: contact,
            Address: address,
            DOB: dob,
            Gender: gender,
            username: username,
            password: password,
          })
          .eq('id', teacher.id);

        data = updateData;
        error = updateError;
      } else {
        // Add new teacher
        const { data: insertData, error: insertError } = await supabase
          .from('teachers')
          .insert([
            {
              Fullname: fullName,
              Email: email,
              Contact: contact,
              Address: address,
              DOB: dob,
              Gender: gender,
              username: username,
              password: password,
              role: 'teacher',
            },
          ]);

        data = insertData;
        error = insertError;
      }

      if (error) {
        console.error("Error saving data:", error.message);
        alert("Error saving teacher: " + error.message);
        return;
      }

      setSuccessMessage("Teacher saved successfully!");
      onSave(data[0]);
      onClose();
    } catch (error) {
      console.error("Unexpected error occurred:", error.message);
      alert("Unexpected error occurred: " + error.message);
    }
  }

  return (
        <div>
          <div className="bg-white flex rounded-3xl shadow-2xl max-w-3xl p-3 relative">
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-red-600 hover:text-red-800 text-3xl font-bold"
            >
              &times;
            </button>
    
            <div className="sm:w-1/2 px=15">
              <div className="flex items-center mt-4">
                <img
                  src="/assets/Addstudentorteacher.png"
                  className="h-12 w-12 mr-2"
                />
                <h1 className="text-[#253553] underline text-2xl font-bold">
                  ____A d d _ T e a c h e r
                </h1>
              </div>
    
              {successMessage && (
                <div className="text-green-600 text-center mb-4">
                  {successMessage}
                </div>
              )}
    
              <form className="flex-col gap-2" onSubmit={handleSubmit}>
                <input
                  className="txt p-2 mt-6 w-80 rounded-xl border shadow-xl"
                  type="text"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
                <input
                  className="txt p-2 mt-6 w-80 rounded-xl border shadow-xl"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  className="txt p-2 mt-6 w-80 rounded-xl border shadow-xl"
                  type="text"
                  placeholder="Contact"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  required
                />
                <input
                  className="txt p-2 mt-6 w-80 rounded-xl border shadow-xl"
                  type="text"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
                <input
                  className="txt p-2 mt-6 w-80 rounded-xl border shadow-xl"
                  type="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  required
                />
                <input
                  className="txt p-2 mt-6 w-80 rounded-xl border shadow-xl"
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <input
                  className="txt p-2 mt-6 w-80 rounded-xl border shadow-xl"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <br />
                <select
                  className="txt p-2 mt-6 w-80 rounded-xl border shadow-xl"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  required
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Others">Others</option>
                </select>
                <br />
    
                <button type="submit" className="text-white shadow-xl font-bold bg-[#8AA4D6] w-80 p-3 mt-10 rounded-xl hover:bg-[#253553] duration-300">
                  A D D
                </button>
              </form>
            </div>
    
            <div className="w-1/3">
              <label htmlFor="photo-upload" className="cursor-pointer">
                <div className="rounded-full overflow-hidden">
                  <img
                    src="/assets/Importimage.png"
                    alt="Teacher Photo"
                    className="absolute inset-0 max-h-32 max-w-32 object-top mt-[8%] ml-[55%]"
                  />
                </div>
              </label>
    
              <input type="file" id="photo-upload" className="hidden" />
            </div>
            <img className="rounded-3xl" src="/assets/popup.png" alt="" />
          </div>
        </div>
      );
    }
    
    export default Addteacher;