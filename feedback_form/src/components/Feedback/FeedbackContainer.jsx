import { useState } from "react";
import { Button } from "primereact/button";
import FeedbackForm from "./FeedbackForm";

function FeedbackContainer() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const openForm = () => {
    setIsFormVisible(true);
    setIsSubmitted(false);
  };

  const handleFormSubmit = () => {
    setIsFormVisible(false);
    setIsSubmitted(true);
  };

  return (
    <div className="flex flex-column align-items-center mt-6">
      {/* Show button */}
      {!isFormVisible && !isSubmitted && (
        <Button
          label="Give Feedback"
          icon="pi pi-comment"
          onClick={openForm}
        />
      )}

      {/* Show form */}
      {isFormVisible && (
        <FeedbackForm onSubmitSuccess={handleFormSubmit} />
      )}

      {/* Success message */}
      {!isFormVisible && isSubmitted && (
        <div className="feedback-success">
          ✅ Thank you! Your feedback has been submitted successfully.
        </div>
      )}
    </div>
  );
}

export default FeedbackContainer;
