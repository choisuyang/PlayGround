import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

export default function Initalize() {
  return (
    <div>
      <div>PlayGround</div>
      <Link to="/apple">
        <Button background="primary">Apple</Button>
      </Link>
    </div>
  );
}
