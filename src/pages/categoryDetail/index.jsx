import { Box } from "@mui/system";
import Bg from "../../component/header/bgImage";
import TopCategories from "../../component/header/Categories";
import Search from "../../component/header/search";
import Popular from "../../component/Popular";
// import Header from "../../component/header";

const CategoryDetail = () => {
  return (
    <div className="vh100">
      <Bg />
      <div className="space-between">
        <Search />
        <TopCategories />
        <Popular />
      </div>
    </div>
  );
};

export default CategoryDetail;
