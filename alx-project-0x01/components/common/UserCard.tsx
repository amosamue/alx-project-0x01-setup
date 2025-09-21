// components/common/UserCard.tsx
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ id, name, username, email, phone, website, company }) => {
  return (
    <div className="max-w-md mx-auto my-4 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-xl font-bold text-gray-800">{name}</h2>
      <p className="text-gray-600">@{username}</p>
      <p className="mt-2 text-gray-700">📧 {email}</p>
      <p className="text-gray-700">📞 {phone}</p>
      <p className="text-gray-700">🌐 {website}</p>
      <div className="mt-4">
        <h3 className="font-semibold text-gray-800">Company</h3>
        <p className="text-gray-600">{company.name}</p>
        <p className="italic text-gray-500">"{company.catchPhrase}"</p>
      </div>
      <p className="mt-2 text-sm text-gray-400">User ID: {id}</p>
    </div>
  );
};

export default UserCard;
