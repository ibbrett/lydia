import Link from "next/link";

const users = [
  { id: 1, name: "Bill" },
  { id: 2, name: "Henry" },
  { id: 3, name: "James" },
];

const Users = () => {
  return (
    <div>
      <h1>Dashboard Users</h1>
      <ul className="mt-10">
        {users.map((user) => {
          return (
            <li key={user.id}>
              <Link href={`/dashboard/users/${user.id}`}>{user.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Users;
