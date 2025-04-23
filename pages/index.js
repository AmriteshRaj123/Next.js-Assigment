import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import StoryCard from '../components/StoryCard';
import FilterBar from '../components/FilterBar';
 import img1 from "../public/img1.jpg";




const dummyData = [
  {
    title: "How 7 lines of code turned into $36B Empire",
    category: "Business",
    date: "20Sep2022",
    status: "Published",
    views: 428,
    imageUrl: "/img3.jpg"
  },
  {
    title: "How 7 lines of code turned into $36B Empire",
    category: "Business",
    date: "20Sep2022",
    status: "Published",
    views: 428,
    imageUrl: "/img5.jpg"
  },
  {
    title: "How 7 lines of code turned into $36B Empire",
    category: "Business",
    date: "20Sep2022",
    status: "Published",
    views: 428,
    imageUrl: "/img3.jpg"
  },
  {
    title: "How 7 lines of code turned into $36B Empire",
    category: "Business",
    date: "20Sep2022",
    status: "Published",
    views: 428,
    imageUrl: "/img5.jpg"
  },
  {
    title: "How 7 lines of code turned into $36B Empire",
    category: "Business",
    date: "20Sep2022",
    status: "Published",
    views: 428,
    imageUrl: "/img5.jpg"
  },
  {
    title: "How 7 lines of code turned into $36B Empire",
    category: "Business",
    date: "20Sep2022",
    status: "Published",
    views: 428,
    imageUrl: "/img3.jpg"
  },
  {
    title: "How 7 lines of code turned into $36B Empire",
    category: "Business",
    date: "20Sep2022",
    status: "Published",
    views: 428,
    imageUrl: "/img3.jpg"
  },
  {
    title: "How 7 lines of code turned into $36B Empire",
    category: "Business",
    date: "20Sep2022",
    status: "Published",
    views: 428,
    imageUrl: "/img8.jpg"
  },
];

export default function Home() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <main style={{ 
  marginLeft: '250px', 
  padding: '20px', 
  width: '100%', 
  paddingTop: '112px'  // 92px topbar + 20px gap
}}>
  <Topbar />
  <FilterBar />
  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    {dummyData.map((story, index) => (
      <StoryCard key={index} {...story}  />
    ))}
  </div>
 
</main>

    </div>
  );
}
