"use client";
const submitHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
  event.preventDefault();
  console.log("Button clicked!", event.currentTarget.id);
};
const SubmitButton = () => {
  return (
    <button className="gradient-button" onClick={submitHandler}>
      Save notes
    </button>
  );
};

export default SubmitButton;
