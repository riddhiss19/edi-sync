import axios from 'axios';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const MemberList = () => {

  const [leader, setLeader] = useState([]);
  const [member2, setMember2] = useState([]);
  const [member3, setMember3] = useState([]);
  const [member4, setMember4] = useState([]);

  useEffect(() => {
    // loadData()
    loadTeamData()
  }, [])

  const userId = Cookies.get("user_id")
  const loadTeamData = async () => {
    console.log(userId);
    const result = await axios.get(`http://localhost:8080/getTeamByMember?user_id=${userId}`)
    const m1 = result.data.leaderId;
    const m2 = result.data.member2Id;
    const m3 = result.data.member3Id;
    const m4 = result.data.member4Id;
    const mem1 = await axios.get(`http://localhost:8080/getUser?id=${m1}`)
    const mem2 = await axios.get(`http://localhost:8080/getUser?id=${m2}`)
    const mem3 = await axios.get(`http://localhost:8080/getUser?id=${m3}`)
    const mem4 = await axios.get(`http://localhost:8080/getUser?id=${m4}`)
    setLeader(mem1.data);
    setMember2(mem2.data);
    setMember3(mem3.data);
    setMember4(mem4.data);

    console.log(leader);



    console.log(result);

  }

  return (
    <table className="member-table">
      <thead>
        <tr>
          <th>Member Name</th>
          <th>Designation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{leader.firstName}</td>
          <td>Leader</td>
        </tr>
        <tr>
          <td>{member2.firstName}</td>
          <td>Member</td>
        </tr>
        <tr>
          <td>{member3.firstName}</td>
          <td>Member</td>
        </tr>
        <tr>
          <td>{member4.firstName}</td>
          <td>Member</td>
        </tr>
      </tbody>
    </table>
  );
};

export default MemberList;