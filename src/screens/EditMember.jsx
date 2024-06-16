import React, { useEffect, useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

const EditMember = ({ member, onClose, teamsData, onMemberUpdated }) => {
  const { memberId } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const team = searchParams.get('team');
  const navigate = useNavigate();

  const [memberData, setMemberData] = useState(member);
  const [loading, setLoading] = useState(false);
  const [teams, setTeams] = useState(teamsData);

  useEffect(() => {
    if (!member) {
      const fetchMember = async () => {
        setLoading(true);
        try {
          const apiUrl = `/api/teams?name=${team}%20Team`;
          const res = await fetch(apiUrl);
          const data = await res.json();
          if (data && data.length > 0) {
            const foundMember = data[0].members.find(m => m.id.toString() === memberId);
            if (foundMember) {
              setMemberData(foundMember);
            }
          }
        } catch (error) {
          console.error('Error fetching member:', error);
        } finally {
          setLoading(false);
        }
      };
      fetchMember();
    }
  }, [memberId, team, member]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Saving changes:', memberData);

      const updatedTeams = createRequest(teams, memberData);
      console.log('Updated teams:', updatedTeams);

      const apiUrl = `/api/teams/${teams[0].id}`;
      const req = await fetch(apiUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedTeams),
      });
      const resData = await req.json();
      console.log('Response:', resData);

      // Trigger the callback function to update the parent state
      onMemberUpdated();
      
      // Close the modal and redirect to the team page after successful submission
      onClose();
      navigate(`/Restaurant-Management/team?team=${team}`);
    } catch (error) {
      console.error('Error saving member:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMemberData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const createRequest = (teams, memberData) => {
    const teamToUpdate = { ...teams[0] };
    const updatedMembers = teamToUpdate.members.map(member =>
      member.id === memberData.id ? { ...member, ...memberData } : member
    );
    teamToUpdate.members = updatedMembers;
    return teamToUpdate;
  };

  if (loading) {
    return <p>Loading member details...</p>;
  }

  if (!memberData) {
    return <p>Member not found.</p>;
  }

  return (
    <div>
      <h2 className="text-lg text-white font-semibold mb-4">Edit Member: {member ? member.name : 'Loading...'}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name:
            <input
              type="text"
              name="name"
              value={memberData.name}
              onChange={handleChange}
              className="mt-1 block w-full border border-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </label>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Role:
            <input
              type="text"
              name="role"
              value={memberData.role}
              onChange={handleChange}
              className="mt-1 block w-full border border-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </label>
        </div>
        <div className="flex justify-end space-x-2">
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          >
            Save Changes
          </button>
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditMember;
