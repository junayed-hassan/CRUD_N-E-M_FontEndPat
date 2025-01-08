import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Stack from "@mui/material/Stack";


function Home() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [coffees, setCoffees] = useState([]);
  const [updataCoffee, setUpdataCoffee] = useState(null);

  // Fetch all coffees
  useEffect(() => {
    fetch("http://localhost:3000/coffees/")
      .then((res) => res.json())
      .then((data) => setCoffees(data));
  }, []);

  // Delete A coffee
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/coffees/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => {
            setCoffees(coffees.filter((coffee) => coffee._id !== id));
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          });
      }
    });
  };

  // Updata a coffee
  const handleUpdata = (id) => {
    fetch(`http://localhost:3000/coffee/${id}`)
      .then((res) => res.json())
      .then((data) => setUpdataCoffee(data));
  };

  // Create A coffee
  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const formData = new FormData(e.target);
    const product = Object.fromEntries(formData);
    
    if (updataCoffee) {
      fetch(`http://localhost:3000/coffee/${updataCoffee._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      })
      .then((res) => res.json())
      .then(() => {
        Swal.fire({
          title: "Good job!",
          text: "You Success Updata A Coffees !",
          icon: "success",
        });
        setSuccess(true);
        e.target.reset(); // Reset the form fields
        setUpdataCoffee(null)
      })
    } else {
    fetch("http://localhost:3000/coffees/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Good job!",
            text: "You Success Added A Coffees !",
            icon: "success",
          });
        }
        setSuccess(true);
        e.target.reset(); // Reset the form fields
      })
      .catch((error) => console.error("Error:", error))
      .finally(() => setLoading(false));
    }
  };

  return (
    <>
      <div className="max-w-xl p-6 mx-auto mt-4 bg-white rounded-lg shadow-lg">
        <h1 className="mb-6 text-3xl font-bold text-center text-gray-800">
          {updataCoffee? "Edit Coffee" : "Create a New Coffee"}
        </h1>
        <form className="space-y-4" onSubmit={onSubmit}>
          {/* Name and Price */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                defaultValue={updataCoffee?.name}
                placeholder="Enter product name"
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700"
              >
                Price:
              </label>
              <input
                type="number"
                id="price"
                name="price"
                defaultValue={updataCoffee?.price}
                placeholder="Enter price"
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          {/* Category and Chef */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700"
              >
                Category:
              </label>
              <input
                type="text"
                id="category"
                name="category"
                defaultValue={updataCoffee?.category}
                placeholder="Enter category"
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="chef"
                className="block text-sm font-medium text-gray-700"
              >
                Chef:
              </label>
              <input
                type="text"
                id="chef"
                name="chef"
                defaultValue={updataCoffee?.chef}
                placeholder="Enter chef's name"
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          {/* Supplier and Taste */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="supplier"
                className="block text-sm font-medium text-gray-700"
              >
                Supplier:
              </label>
              <input
                type="text"
                id="supplier"
                name="supplier"
                defaultValue={updataCoffee?.supplier}
                placeholder="Enter supplier name"
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="taste"
                className="block text-sm font-medium text-gray-700"
              >
                Taste:
              </label>
              <input
                type="text"
                id="taste"
                name="taste"
                defaultValue={updataCoffee?.taste}
                placeholder="Enter taste description"
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          {/* Photo URL */}
          {/* <div>
            <label
              htmlFor="photoUrl"
              className="block text-sm font-medium text-gray-700"
            >
              Photo URL:
            </label>
            <input
              type="url"
              id="photoUrl"
              name="photoUrl"
              defaultValue={updataCoffee?.photoUrl}
              placeholder="Enter photo URL"
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div> */}

          {/* Details */}
          <div>
            <label
              htmlFor="details"
              className="block text-sm font-medium text-gray-700"
            >
              Details:
            </label>
            <textarea
              id="details"
              name="details"
              defaultValue={updataCoffee?.details}
              placeholder="Enter additional details"
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`mt-6 w-full py-2 px-4 text-white font-medium rounded-md shadow-sm ${
              loading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700"
            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>

        {/* Feedback Messages */}
        {loading && (
          <p className="mt-4 text-center text-blue-500">Submitting...</p>
        )}
        {success && (
          <p className="mt-4 text-center text-green-500">
            Form submitted successfully!
          </p>
        )}
      </div>
      <div>
        <h1 className="mt-3 text-3xl font-bold text-center text-gray-800">
         All  Coffees
        </h1>
        <div className="grid grid-cols-4 gap-4 p-4">
          {coffees.map((coffee) => (
            <div
              key={coffee._id}
              className="justify-between p-4 bg-white rounded-lg shadow-lg "
            >
              <div>
                {/* <img
              src={coffee.photoUrl}
              alt={coffee.name}
              className="object-cover w-full h-48 rounded-lg"
            /> */}
                <h2 className="mt-4 text-xl font-bold text-gray-800">
                  {coffee.name}
                </h2>
                <p className="text-sm text-gray-600"><span className="font-medium"> Price:</span>  {coffee.price}</p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">  Category:</span> {coffee.category}
                </p>
                <p className="text-sm text-gray-600"><span className="font-medium">Chef: </span>  {coffee.chef}</p>
                <p className="text-sm text-gray-600">
                 <span className="font-medium"> Supplier: </span>  {coffee.supplier}
                </p>
                <p className="text-sm text-gray-600"><span className="font-medium">Taste:  </span> {coffee.taste}</p>
                <p className="mt-2 text-sm font-medium text-gray-600">{coffee.details}</p>
              </div>
              <div className="flex gap-3 my-3">
                {/* <Stack>
                  <Button variant="contained" endIcon={<RemoveRedEyeIcon />}>
                    Views
                  </Button>
                </Stack> */}
                <Stack>
                  <Button
                    onClick={() => handleUpdata(coffee._id)}
                    variant="contained"
                    endIcon={<EditIcon />}
                  >
                    Edit
                  </Button>
                </Stack>
                <Stack direction="row" spacing={2}>
                  <Button
                    variant="outlined"
                    startIcon={<DeleteIcon />}
                    onClick={() => handleDelete(coffee._id)}
                  >
                    Delete
                  </Button>
                </Stack>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
