import React from "react";

const Collapse = (props) => {
  return (
    <div>
      <a
        className="btn btn-primary"
        data-bs-toggle="collapse"
        href={"#".concat(props.href)}
        role="button"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        Buraya Bakarlar
      </a>

      <div class="collapse" id={props.href}>
        <div class="card card-body">{props.children}</div>
      </div>
    </div>
  );
};

export default Collapse;
