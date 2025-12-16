import { useEffect, useState } from "react";
import { RadioButton } from "primereact/radiobutton";
import { Checkbox } from "primereact/checkbox";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { Rating } from "primereact/rating";

function FeedbackForm({ onSubmitSuccess }) {
  const [serviceQuality, setServiceQuality] = useState("");
  const [uiExperience, setUiExperience] = useState("");
  const [recommend, setRecommend] = useState(false);
  const [supportSatisfied, setSupportSatisfied] = useState(false);
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    console.log("Feedback Form Mounted");
    return () => console.log("Feedback Form Unmounted");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitSuccess();
  };

  return (
    <div className="flex justify-content-center mt-5">
      <div className="feedback-card">
        <h2>User Feedback</h2>

        {/* Question 1 */}
        <div className="feedback-section">
          <p>How was the service quality?</p>
          {["Excellent", "Good", "Average", "Poor"].map((value) => (
            <div key={value} className="flex align-items-center mb-2">
              <RadioButton
                value={value}
                checked={serviceQuality === value}
                onChange={(e) => setServiceQuality(e.value)}
              />
              <label className="ml-2">{value}</label>
            </div>
          ))}
        </div>

        {/* Question 2 */}
        <div className="feedback-section">
          <p>How was the user interface?</p>
          {["Very Easy", "Easy", "Difficult"].map((value) => (
            <div key={value} className="flex align-items-center mb-2">
              <RadioButton
                value={value}
                checked={uiExperience === value}
                onChange={(e) => setUiExperience(e.value)}
              />
              <label className="ml-2">{value}</label>
            </div>
          ))}
        </div>

        {/* Checkboxes */}
        <div className="feedback-section">
          <Checkbox
            checked={recommend}
            onChange={(e) => setRecommend(e.checked)}
          />
          <label className="ml-2">Would you recommend our product?</label>
        </div>

        <div className="feedback-section">
          <Checkbox
            checked={supportSatisfied}
            onChange={(e) => setSupportSatisfied(e.checked)}
          />
          <label className="ml-2">
            Are you satisfied with customer support?
          </label>
        </div>

        {/* Rating */}
        <div className="feedback-section">
          <p>Overall Rating</p>
          <Rating
            value={rating}
            onChange={(e) => setRating(e.value)}
            stars={5}
            cancel={false}
          />
        </div>

        {/* Optional Feedback */}
        <InputTextarea
          rows={3}
          placeholder="Optional feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          className="w-full mb-3"
        />

        <Button
          label="Submit Feedback"
          icon="pi pi-check"
          className="w-full"
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
}

export default FeedbackForm;
