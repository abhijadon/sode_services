import React, { useState } from "react";
import College from "./Data";
const Dataa = () => {
  const [college, setCollege] = useState("-select university-");
  const [course, setCourse] = useState("-select course-");
  const [subcourse, setsubCourse] = useState("-select subcourse-");

  return (
    <>
      <div className="">
        <form>
          <label>
            Name:
            <select value={college}>
              <option>--select college--</option>
              {College.map((ctr) => (
                <option value={ctr.name}>{ctr.name}</option>
              ))}
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
};

export default Dataa;
