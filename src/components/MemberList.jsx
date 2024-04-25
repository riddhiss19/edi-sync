import React from 'react';


const MemberList = () => {
  const members = [
    { name: 'Swarup Vishwas', designation: 'Team Leader', action: 'Edit' },
    { name: 'Riddhi Sonawane', designation: 'Team Member', action: 'Delete' },
    { name: 'Vivek Badade', designation: 'Team Member', action: 'Delete' },
    { name: 'Akshay Shingote', designation: 'Team Member', action: 'Delete' },
  ];

  return (
    <table className="member-table">
      <thead>
        <tr>
          <th>Member Name</th>
          <th>Designation</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {members.map((member, index) => (
          <tr key={index}>
            <td>{member.name}</td>
            <td>{member.designation}</td>
            <td>
              <button className={`action-btn ${member.action.toLowerCase()}`}>
                {member.action}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MemberList;