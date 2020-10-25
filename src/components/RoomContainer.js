//another way using higher order component
import React from "react";
import { withRoomConsumer } from "../context";
import Loading from "./Loading";
import RoomsFilter from "./RoomFilter";
import RoomsList from "./RoomList";

function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </>
  );
}

export default withRoomConsumer(RoomContainer);



// import React from "react";
// import RoomFilter from "./RoomFilter";
// import RoomList from "./RoomList";
// import Loading from "./Loading";
// import { RoomConsumer } from "../context";

// export default function RoomContainer() {
//   return (
//     <RoomConsumer>
//       {(value) => {
//           const {loading, sortedRooms, rooms} = value
//     if(loading) {
//         return <Loading />
//     }
//         return (
//           <div>
//             Hello from room
//             <RoomFilter rooms={rooms}/>
//             <RoomList rooms={sortedRooms}/>
//           </div>
//         );
//       }}
//     </RoomConsumer>
//   );
// }
