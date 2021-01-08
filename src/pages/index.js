import React from "react";
import styles from "./index.css";
import { Button } from "antd";
export default () => {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      {/* <button>LOGIN</button> */}
      <Button>点击</Button>
    </div>
  );
};
