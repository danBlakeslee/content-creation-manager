const MaintenanceFormSelector = ({
  allMaintenanceTypes,
  updateMaintenanceType,
}) => {
  return (
    <>
      <div className="bg-white shadow-lg rounded-lg p-4 w-min mb-4">
        <select
          className="mt-1 block px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          onChange={(e) => updateMaintenanceType(parseInt(e.target.value), 10)}
        >
          <option key={123} value={0}>
            Select Maintenance Type
          </option>
          (
          {allMaintenanceTypes?.map((type) => (
            <option
              key={type.maintenance_type_id}
              value={type.maintenance_type_id}
            >
              {type.maintenance_type_name}
            </option>
          ))}
          )
        </select>
      </div>
    </>
  );
};

export default MaintenanceFormSelector;
