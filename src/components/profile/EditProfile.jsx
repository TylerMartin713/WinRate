import { useEffect, useState } from "react";
import { UpdateBio } from "../../Services/updateBio.jsx";

export const EditProfile = ({ isOpen, onClose, user }) => {
  const [bio, setBio] = useState("");

  useEffect(() => {
    setBio(user.profileBio);
  }, [user.profileBio]);

  if (!isOpen) return null;

  const handleSaveBio = (event) => {
    event.preventDefault();
    UpdateBio(user.id, bio);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900/60 ... flex items-center justify-center z-50">
      {/* Modal content */}
      <div className="bg-gray-800 text-white rounded-xl w-full max-w-lg p-6 relative shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl font-bold"
        >
          &times;
        </button>

        {/* Form Fields */}
        <div className="mt-12">
          <label className="block text-sm font-semibold mb-1">Bio</label>
          <textarea
            className="w-full p-2 rounded bg-zinc-800 border border-emerald-500 mb-4"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            rows="3"
          />
          <button
            onClick={handleSaveBio}
            className="w-full mt-4 py-2 bg-emerald-600 hover:bg-emerald-700 rounded font-semibold"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
