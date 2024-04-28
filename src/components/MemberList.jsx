import axios from 'axios';
import { useState, useEffect } from 'react';

const MemberList = ({ teamId }) => {

  const [leader, setLeader] = useState([]);
  const [member2, setMember2] = useState([]);
  const [member3, setMember3] = useState([]);
  const [member4, setMember4] = useState([]);

  useEffect(() => {
    // loadData()
    loadTeamData()
  }, [])
    

  const loadTeamData = async () => {
    const result = await axios.get(`http://localhost:8080/getTeam?id=${teamId}`)
    const m1 = result.data.leaderId;
    const m2 = result.data.member2Id;
    const m3 = result.data.member3Id;
    const m4 = result.data.member4Id;
    const mem1 = await axios.get(`http://localhost:8080/getUser?id=${m1}`)
    const mem2 = await axios.get(`http://localhost:8080/getUser?id=${m2}`)
    const mem3 = await axios.get(`http://localhost:8080/getUser?id=${m3}`)
    const mem4 = await axios.get(`http://localhost:8080/getUser?id=${m4}`)

    setLeader(mem1);
    setMember2(mem2);
    setMember3(mem3);
    setMember4(mem4);



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
          <td>{leader.name}</td>
          <td>{leader.role}</td>
        </tr>
        <tr>
          <td>{member2.name}</td>
          <td>{member2.role}</td>
        </tr>
        <tr>
          <td>{member3.name}</td>
          <td>{member3.role}</td>
        </tr>
        <tr>
          <td>{member4.name}</td>
          <td>{member4.role}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default MemberList;