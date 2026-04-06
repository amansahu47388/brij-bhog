// components/Profile.jsx
import { useParams } from "react-router-dom";

const Profile = () => {
  const { serviceSlug } = useParams();
  
  return (
    <div className="container mx-auto p-8">
      <h1>Service: {serviceSlug.replace(/-/g, ' ')}</h1>
      <p>Clicked service details page for: {serviceSlug}</p>
    </div>
  );
};

export default Profile;
