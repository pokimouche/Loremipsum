import React from "react";
import Content from "./components/Content";

import "./css/reset.css";
import "./App.css";

const text1 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis varius lectus at bibendum placerat. Quisque vitae maximus mi, sit amet finibus orci. Phasellus efficitur et justo a bibendum. Sed tincidunt varius sem ac tempor. In fermentum nisi sed est feugiat tincidunt non ac risus. Proin rhoncus convallis tellus non bibendum. Phasellus hendrerit metus libero, non imperdiet turpis vestibulum faucibus. Vivamus tincidunt in massa nec porttitor. Curabitur est dolor, interdum ac risus eget, rutrum dapibus ligula. In sit amet auctor massa. Nulla id ullamcorper tellus. Curabitur sit amet velit lorem. Sed blandit dui eget viverra dapibus. Maecenas dictum dictum orci, ut sodales augue semper sed.";
const text2 =
  "Nam pellentesque metus sit amet gravida rutrum. Duis sit amet augue eu arcu imperdiet facilisis. Nam ullamcorper orci non lacinia tincidunt. Donec volutpat sodales felis, id ornare arcu varius et. Nulla eleifend elit orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus vitae enim tortor. Donec euismod lectus ut nisi aliquam dictum. Nulla urna metus, elementum aliquet erat et, vulputate scelerisque lacus. Phasellus euismod orci sit amet velit aliquam porttitor.";

function App() {
  return (
    <div className="App">
      <Content text={text1} name="Lorem"></Content>
      <Content text={text2} name="ipsum"></Content>
    </div>
  );
}

export default App;
