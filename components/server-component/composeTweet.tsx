import React from "react";

const ComposeGist = () => {
  async function submitGist(formData: FormData) {
    "use server";
    console.log("formdata", formData);
  }
  return <div>submitGist</div>;
};

export default ComposeGist;
