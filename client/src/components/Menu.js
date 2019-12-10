import React from "react";
import { Header, Button, Icon} from "semantic-ui-react"


const Menu = (props) => (
  <div style={styles.flex}>
    <div style={styles.flex}>
    <Header as="h1" >{props.name}</Header>
    </div>
    <div>
      <Button
      icon
      color="red"
      size="tiny"
      style={{ marginLeft: "10px", }}
      onClick={() => props.deleteMenu(props.id)}
      ><Icon name="trash"/></Button>
    </div>
  </div>
)

const styles = {
  pointer: {
    cursor: "pointer",
  },
  flex: {
    display: "flex",
    alignItems: "center",
  },
};    

export default Menu;