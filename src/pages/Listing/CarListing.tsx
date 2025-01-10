import CarCard from "../../components/ui/Car Card/CarCard";
import Container from "../../components/ui/Container";
import Filter from "../../components/ui/Filter/Filter";
import FilterDrawer from "../../components/ui/Filter/FilterDrawer";
import CustomPagination from "../../components/ui/Pagination/CustomPagination";
import ReUseableBanner from "../../components/ui/Reuseable Banner/ReUseableBanner";
import { useGetAllCarsByUserQuery } from "../../Redux/Feature/Public User/user";
import { TCar, TQueryParams } from "../../Types/car.types";
import { useEffect, useState } from "react";
import customPaginationFn from "../../utils/customPaginationFn";
import LoadingPage from "../Loading/LoadingPage";
import { useAppSelector } from "../../Redux/hook";
import { useSearchParams } from "react-router-dom";

const CarListing = () => {
  const [searchParams] = useSearchParams();

  const category = searchParams.get("category");

  const [params, setParams] = useState<TQueryParams[]>([]);
  const currentLocation = useAppSelector((s) => s.location);
  const { data, isFetching, refetch } = useGetAllCarsByUserQuery([
    { name: "sort", value: "-createdAt" },
    // { name: "category", value: category },
    ...(category ? [{ name: "category", value: category }] : []), // Add category if available
    {
      name: "fields",
      value:
        "_id name images seatingCapacity numberOfDoors rentalPricePerDay mileage type category availableAreas",
    },
    ...params,
  ]);
  const handlePagination = customPaginationFn(setParams);
  useEffect(() => {
    if (
      currentLocation !== null &&
      currentLocation !== undefined &&
      currentLocation !== ""
    ) {
      setParams((prevParams) => [
        { name: "availableAreas", value: currentLocation },
        ...prevParams,
      ]);
      refetch();
    }
  }, [currentLocation, refetch]);
  return (
    <div>
      <div className="">
        <ReUseableBanner
          title="Rental Car"
          subTitle="* Premium"
          image="https://webredox.net/demo/wp/renax/wp-content/uploads/2024/04/2.jpg"
        />
      </div>

      <Container>
        <div className="grid grid-cols-12 justify-center lg:justify-between  gap-5 ">
          {/* filter div  */}
          <div className="hidden md:block -mt-[113px] opacity-90 col-span-3">
            <Filter setParams={setParams} />
          </div>
          <div className="visible md:hidden mt-4 absolute ">
            <FilterDrawer setParams={setParams} />
          </div>
          {/* car show div  */}
          <div className="text-white text-lg mt-20 col-span-12 md:col-span-9 ">
            {!isFetching ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-center items-center">
                {data?.data?.result.length ? (
                  data?.data?.result?.map((item: Partial<TCar>) => (
                    <CarCard key={item?._id} item={item} />
                  ))
                ) : (
                  <span className="text-5xl text-red-500 w-full justify-center items-center">
                    There is no data 😥😥{" "}
                  </span>
                )}
              </div>
            ) : (
              <LoadingPage />
            )}
          </div>
        </div>
        {/* pagination div  */}
        <div className="flex justify-center items-center my-20">
          <CustomPagination
            total={data?.data?.meta?.total}
            limit={6}
            handlePagination={handlePagination}
          />
        </div>
      </Container>
    </div>
  );
};

export default CarListing;
