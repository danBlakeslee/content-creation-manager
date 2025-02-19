// import RoomCard from "@/components/RoomCard";
import Heading from "@/components/Heading";
import SectionOrganizer from "@/components/SectionOrganizer";
// import getAllRooms from "./actions/getAllRooms";

export default async function Home() {
  return (
    <>
      <Heading title="Planning Center" />
      <SectionOrganizer
        title="Posting Schedule"
        redirectLink={"/planning/schedule"}
      />
      <SectionOrganizer
        title="Video Topics"
        redirectLink={"/planning/topics/sunday/1"}
      />
      <SectionOrganizer
        title="Lookup Maintenance"
        redirectLink={"/planning/maintenance"}
      />
      <SectionOrganizer
        title="Data Backup"
        redirectLink={"/planning/backup"}
      />
    </>
  );
}
