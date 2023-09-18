'use client'
import React, { useState } from 'react';
import axios from 'axios';
import Modal from '../shared/modal/Modal';
import styles from "./waitlistUsers.module.css"
import Image from 'next/image';
import { AiOutlineSearch } from "react-icons/ai";
import Link from 'next/link';


 
const WaitlistUsers =  ({users,session}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [onOpen, setOnOpen] = useState(false);
  const [mails, setMails] = useState(users);
  const [singleMailData, setSingleMailData] = useState({
    _id: '',
    email:''
  });

  
    // Filter the mail data based on the search query
    const filteredMails = mails? mails.filter((data:any) =>
    data.email.toLowerCase().includes(searchQuery.toLowerCase()) 
  ) : [];



  const handleDelete = async (id:string)=>{
    try {      
      const response = await axios.delete(`/api/users/waitlist/${id}`);
      setMails(response.data.updatedMailsData)

    } catch (error:any) {
      console.log(error);
      
    }
  }


  const handleUpdate = async (user:any)=>{
    setOnOpen(true)
    const {_id, email} = user
    setSingleMailData({ _id: _id, email : email });
  }

  function onClose() {
    setOnOpen(false)
  }


  async function onOk() {
    try {
      const response = await axios.put("/api/users/waitlist", singleMailData);
      setMails(response.data.updatedMailsData)
      
    } catch (error:any) {
      console.log(error);
    }
  }

  return (  
        <div className={styles.container}>
          <Modal title="Edit WaitList Data" onOpen={onOpen} onOk={onOk} onClose={onClose}>
            <label htmlFor="email_field">
                Enter updated email
            </label>
            <input
                type="email"
                id="email_field"
                value={singleMailData.email}
                onChange={(e) =>
                  setSingleMailData({
                    ...singleMailData, 
                    email: e.target.value, 
                  })
                }
            />
          </Modal>

          <h1 className={styles.title}>Waitlist Users</h1>

          <div className={styles.searchContainer}>              
            <AiOutlineSearch className={styles.searchIcon}/>
            <input
              className={styles.searchInput}
              type="text"
              placeholder="Search Email"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {filteredMails.length>0 ? 
            <div className={styles.tableContainer}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Email</th>
                    {session.user.role==="user" && 
                    <th>Action</th>}
                  </tr>
                </thead>
                <tbody>
                {filteredMails?.map((user:any,index:any) => (
                    <tr key={user._id}>
                      <td>
                        {index+1}
                      </td>
                      <td>
                        {user.email}
                      </td>
                      {session.user.role==="user" && 
                          <td>
                            <button className={styles.btn1} onClick={() => handleUpdate(user)}>Update</button>    
                            <button className={styles.btn2} onClick={() => handleDelete(user._id)}>Delete</button>                  
                          </td>                     
                      }
                    </tr>
                ))}
                </tbody>
              </table>
            </div> : 
            <div className={styles.empty}>
              <p>No Email Found</p>
              {mails?.length === 0 && 
               <Link href="/">
                <button>Join Waitlist Now</button>
              </Link>
              }
            </div>
          }

        </div>
  );
};

export default WaitlistUsers;