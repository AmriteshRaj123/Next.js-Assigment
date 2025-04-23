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
    imageUrl: "/img1.jpg"
  },
  {
    title: "How 7 lines of code turned into $36B Empire",
    category: "Business",
    date: "20Sep2022",
    status: "Published",
    views: 428,
    imageUrl: "https://s3-alpha-sig.figma.com/img/d146/1468/65a8273af2cbbc88616b1353aee1e51d?Expires=1746403200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QD7qig1FF7pP4DoZ86jfut-enRWkeqE14au-x1iW36f4FP~rHbPe84Tp4WzaF1MuG0~GUU6pQ4QOFJ4dXVwZMMi9imAPJKJ9p1teHrRrs6agfxAJxVvFp0sdWbyjh2V3QhOXswuVfGuXFSmDFmO10NP4PDBu2uEaUJp4aDPeVpmM5EAhsvzA8JJIlq9NYeNxr4wpBXmqwaxTksP51CSvvmyk3COvZCegsv9eGKOHfAD9H187FY3wRL1zC-lqevQnjNJNn9W0gabsbKjuByUdXwkSspTO6SNYAt2ZhewhzwZ2M~Q5v~NVu-KLY91SM2Ovmm53ZnhnCMdGQe~9Ki6b6A__"
  },
  {
    title: "How 7 lines of code turned into $36B Empire",
    category: "Business",
    date: "20Sep2022",
    status: "Published",
    views: 428,
    imageUrl: "https://s3-alpha-sig.figma.com/img/d146/1468/65a8273af2cbbc88616b1353aee1e51d?Expires=1746403200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QD7qig1FF7pP4DoZ86jfut-enRWkeqE14au-x1iW36f4FP~rHbPe84Tp4WzaF1MuG0~GUU6pQ4QOFJ4dXVwZMMi9imAPJKJ9p1teHrRrs6agfxAJxVvFp0sdWbyjh2V3QhOXswuVfGuXFSmDFmO10NP4PDBu2uEaUJp4aDPeVpmM5EAhsvzA8JJIlq9NYeNxr4wpBXmqwaxTksP51CSvvmyk3COvZCegsv9eGKOHfAD9H187FY3wRL1zC-lqevQnjNJNn9W0gabsbKjuByUdXwkSspTO6SNYAt2ZhewhzwZ2M~Q5v~NVu-KLY91SM2Ovmm53ZnhnCMdGQe~9Ki6b6A__"
  },
  {
    title: "How 7 lines of code turned into $36B Empire",
    category: "Business",
    date: "20Sep2022",
    status: "Published",
    views: 428,
    imageUrl: "https://s3-alpha-sig.figma.com/img/d146/1468/65a8273af2cbbc88616b1353aee1e51d?Expires=1746403200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QD7qig1FF7pP4DoZ86jfut-enRWkeqE14au-x1iW36f4FP~rHbPe84Tp4WzaF1MuG0~GUU6pQ4QOFJ4dXVwZMMi9imAPJKJ9p1teHrRrs6agfxAJxVvFp0sdWbyjh2V3QhOXswuVfGuXFSmDFmO10NP4PDBu2uEaUJp4aDPeVpmM5EAhsvzA8JJIlq9NYeNxr4wpBXmqwaxTksP51CSvvmyk3COvZCegsv9eGKOHfAD9H187FY3wRL1zC-lqevQnjNJNn9W0gabsbKjuByUdXwkSspTO6SNYAt2ZhewhzwZ2M~Q5v~NVu-KLY91SM2Ovmm53ZnhnCMdGQe~9Ki6b6A__"
  },
  {
    title: "How 7 lines of code turned into $36B Empire",
    category: "Business",
    date: "20Sep2022",
    status: "Published",
    views: 428,
    imageUrl: "https://s3-alpha-sig.figma.com/img/d146/1468/65a8273af2cbbc88616b1353aee1e51d?Expires=1746403200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QD7qig1FF7pP4DoZ86jfut-enRWkeqE14au-x1iW36f4FP~rHbPe84Tp4WzaF1MuG0~GUU6pQ4QOFJ4dXVwZMMi9imAPJKJ9p1teHrRrs6agfxAJxVvFp0sdWbyjh2V3QhOXswuVfGuXFSmDFmO10NP4PDBu2uEaUJp4aDPeVpmM5EAhsvzA8JJIlq9NYeNxr4wpBXmqwaxTksP51CSvvmyk3COvZCegsv9eGKOHfAD9H187FY3wRL1zC-lqevQnjNJNn9W0gabsbKjuByUdXwkSspTO6SNYAt2ZhewhzwZ2M~Q5v~NVu-KLY91SM2Ovmm53ZnhnCMdGQe~9Ki6b6A__"
  },
  {
    title: "How 7 lines of code turned into $36B Empire",
    category: "Business",
    date: "20Sep2022",
    status: "Published",
    views: 428,
    imageUrl: "https://s3-alpha-sig.figma.com/img/d146/1468/65a8273af2cbbc88616b1353aee1e51d?Expires=1746403200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QD7qig1FF7pP4DoZ86jfut-enRWkeqE14au-x1iW36f4FP~rHbPe84Tp4WzaF1MuG0~GUU6pQ4QOFJ4dXVwZMMi9imAPJKJ9p1teHrRrs6agfxAJxVvFp0sdWbyjh2V3QhOXswuVfGuXFSmDFmO10NP4PDBu2uEaUJp4aDPeVpmM5EAhsvzA8JJIlq9NYeNxr4wpBXmqwaxTksP51CSvvmyk3COvZCegsv9eGKOHfAD9H187FY3wRL1zC-lqevQnjNJNn9W0gabsbKjuByUdXwkSspTO6SNYAt2ZhewhzwZ2M~Q5v~NVu-KLY91SM2Ovmm53ZnhnCMdGQe~9Ki6b6A__"
  },
  {
    title: "How 7 lines of code turned into $36B Empire",
    category: "Business",
    date: "20Sep2022",
    status: "Published",
    views: 428,
    imageUrl: "https://s3-alpha-sig.figma.com/img/d146/1468/65a8273af2cbbc88616b1353aee1e51d?Expires=1746403200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QD7qig1FF7pP4DoZ86jfut-enRWkeqE14au-x1iW36f4FP~rHbPe84Tp4WzaF1MuG0~GUU6pQ4QOFJ4dXVwZMMi9imAPJKJ9p1teHrRrs6agfxAJxVvFp0sdWbyjh2V3QhOXswuVfGuXFSmDFmO10NP4PDBu2uEaUJp4aDPeVpmM5EAhsvzA8JJIlq9NYeNxr4wpBXmqwaxTksP51CSvvmyk3COvZCegsv9eGKOHfAD9H187FY3wRL1zC-lqevQnjNJNn9W0gabsbKjuByUdXwkSspTO6SNYAt2ZhewhzwZ2M~Q5v~NVu-KLY91SM2Ovmm53ZnhnCMdGQe~9Ki6b6A__"
  },
  {
    title: "How 7 lines of code turned into $36B Empire",
    category: "Business",
    date: "20Sep2022",
    status: "Published",
    views: 428,
    imageUrl: "https://s3-alpha-sig.figma.com/img/d146/1468/65a8273af2cbbc88616b1353aee1e51d?Expires=1746403200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QD7qig1FF7pP4DoZ86jfut-enRWkeqE14au-x1iW36f4FP~rHbPe84Tp4WzaF1MuG0~GUU6pQ4QOFJ4dXVwZMMi9imAPJKJ9p1teHrRrs6agfxAJxVvFp0sdWbyjh2V3QhOXswuVfGuXFSmDFmO10NP4PDBu2uEaUJp4aDPeVpmM5EAhsvzA8JJIlq9NYeNxr4wpBXmqwaxTksP51CSvvmyk3COvZCegsv9eGKOHfAD9H187FY3wRL1zC-lqevQnjNJNn9W0gabsbKjuByUdXwkSspTO6SNYAt2ZhewhzwZ2M~Q5v~NVu-KLY91SM2Ovmm53ZnhnCMdGQe~9Ki6b6A__"
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
