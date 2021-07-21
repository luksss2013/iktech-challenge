 
import "./ContentArea.css";

const ContentArea: React.FC = ({ children }) => {
  return (
    <div className="content-area">
      <div>
      {children}

      </div>
    </div>
  );
};

export default ContentArea;