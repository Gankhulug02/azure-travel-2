import { Box } from "@mui/system";
import Packeges from "../../component/AllInclusivePackages";
import Bg from "../../component/header/bgImage";
import TopCategories from "../../component/header/Categories";
import Search from "../../component/header/search";
import Honeymoon from "../../component/HoneymoonFreebiesSpecial";
import Popular from "../../component/Popular";
import RecentlyViewed from "../../component/recentlyViewed";
import Footer from "../../component/footer";
// import Header from "../../component/header";

const CategoryDetail = () => {
  return (
    <Box>
      <div className="vh100">
        <Bg />
        <div
          style={{
            height: "95vh",
            marginTop: "40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: "50px",
          }}
        >
          <Search />
          <TopCategories />
          <Popular />
        </div>
      </div>
      <RecentlyViewed />
      <Packeges />
      <Honeymoon />
      <Footer />
    </Box>
  );
};

export default CategoryDetail;
