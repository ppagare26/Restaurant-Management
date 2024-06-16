import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AddTeamMember = ({ onClose, teamsData, onMemberUpdated }) => {
  const navigate = useNavigate();

  // Initialize state with default values to avoid undefined issues
  const [memberData, setMemberData] = useState({ name: '', role: '' });
  const [teams, setTeams] = useState([]);

  // Update the teams state when teamsData prop changes
  useEffect(() => {
    if (teamsData && teamsData.length > 0) {
      setTeams(teamsData);
    }
  }, [teamsData]);

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
      navigate(`/Restaurant-Management/team?team=${teams[0].name}`);
    } catch (error) {
      console.error('Error saving member:', error);
    }
  };

  const createRequest = (teams, memberData) => {
    console.log("teamsData", teams);
    const teamToUpdate = { ...teams[0] };
    const currentMaxId = Math.max(...teamToUpdate.members.map(member => member.id), 0);
    const updatedMembers = [...teamToUpdate.members, { ...memberData, id: currentMaxId + 1 }];

    teamToUpdate.members = updatedMembers;
    return teamToUpdate;
  };

  return (
    <div>
      <h2 className="text-lg text-white font-semibold mb-4">Add Member Details:</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name:
            <input
              type="text"
              name="name"
              value={memberData.name}
              onChange={(e) => setMemberData({ ...memberData, name: e.target.value })}
              className="mt-1 block w-full border border-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
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
              onChange={(e) => setMemberData({ ...memberData, role: e.target.value })}
              className="mt-1 block w-full border border-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
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

export default AddTeamMember;
