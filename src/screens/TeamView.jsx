import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Spinner from '../spinners/Spinner';
import { PencilIcon } from '@heroicons/react/24/outline';
import Modal from 'react-modal';
import EditMember from './EditMember';
import AddTeamMember from './AddTeamMember';

Modal.setAppElement('#root'); // Set the app element for accessibility

const TeamView = () => {
  const [searchParams] = useSearchParams();
  const teamName = searchParams.get('team');

  const [teamData, setTeamData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const fetchTeam = async () => {
    setLoading(true);
    const apiUrl = `/api/teams?name=${encodeURIComponent(teamName)}`;
    try {
      const res = await fetch(apiUrl);
      const data = await res.json();
      setTeamData(data);
    } catch (error) {
      console.error('Error fetching team data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (teamName) {
      fetchTeam();
    }
  }, [teamName]);

  const openEditModal = (member) => {
    setSelectedMember(member);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedMember(null);
  };

  const openAddModal = () => {
    setIsAddModalOpen(true);
  };

  const closeAddModal = () => {
    setIsAddModalOpen(false);
  };

  const handleMemberUpdated = () => {
    fetchTeam(); // Re-fetch the team data after a member is updated
  };

  return (
    <div className={`w-full flex flex-wrap ${isEditModalOpen || isAddModalOpen ? 'blur-sm' : ''}`}>
      <div className="w-full flex justify-center items-center p-8">
        <h1>{teamName ? `${teamName} Team` : 'Team Page'}</h1>
      </div>

      {teamName && (
        <div className="w-full p-2 flex flex-wrap justify-center">
          {loading ? (
            <Spinner loading={loading} />
          ) : teamData && teamData[0]?.members ? (
            teamData[0].members.map((member) => (
              <div key={member.id} className="relative bg-gray-800 text-white rounded-lg p-4 m-2 w-full md:w-1/3 lg:w-1/4">
                <div className="flex justify-between items-center mb-2">
                  <div className="font-bold">{member.name}</div>
                  <button className="text-purple-500 hover:text-purple-700 flex items-center" onClick={() => openEditModal(member)}>
                    <PencilIcon className="h-5 w-5 mr-1" />
                    Edit
                  </button>
                </div>
                <div className="text-gray-400">{member.role}</div>
              </div>
            ))
          ) : (
            <p>No members found.</p>
          )}
        </div>
      )}

      {teamName && !loading && (
        <div className="w-full flex justify-center items-center p-10">
          <button className="w-1/2 md:w-1/3 lg:w-1/4 mt-4 border border-purple-500 text-purple-500 py-2 px-4 rounded hover:bg-purple-700" onClick={openAddModal}>
            Add Member
          </button>
        </div>
      )}

      <Modal
        isOpen={isEditModalOpen}
        onRequestClose={closeEditModal}
        contentLabel="Edit Member"
        className="fixed inset-0 flex items-center justify-center p-4"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75"
      >
        <div className="bg-gray-900 rounded-lg p-6 w-full max-w-md mx-auto">
          <EditMember member={selectedMember} onClose={closeEditModal} teamsData={teamData} onMemberUpdated={handleMemberUpdated} />
        </div>
      </Modal>

      <Modal
        isOpen={isAddModalOpen}
        onRequestClose={closeAddModal}
        contentLabel="Add Member"
        className="fixed inset-0 flex items-center justify-center p-4"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75"
      >
        <div className="bg-gray-900 rounded-lg p-6 w-full max-w-md mx-auto">
          <AddTeamMember onClose={closeAddModal} teamsData={teamData} onMemberUpdated={handleMemberUpdated} />
        </div>
      </Modal>
    </div>
  );
};

export default TeamView;
