"use client";
import {
  useMemo,
  useState,
  useEffect,
  useCallback,
} from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  MRT_EditActionButtons,
} from "material-react-table";
import {
  Box,
  Tooltip,
  IconButton,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { FaPen } from "react-icons/fa6";
import updateEpisode from "@/app/actions/updateEpisode";
import { toast } from "react-toastify";
import {
  episodeTypeNames,
  statusTypeNames,
  daysOfTheWeekJustText,
} from "@/app/helpers/helperObjects";
import { useMaintenance } from "@/app/context/maintenanceContext";

const EpisodeTableWrapper = ({ allEpisodes }) => {
  const columns = useMemo(
    () => [
      {
        accessorKey: "episode_number", //simple recommended way to define a column
        header: "Ep #",
        muiTableHeadCellProps: { sx: { color: "green" } }, //optional custom props
        Cell: ({ cell }) => <span>{cell.getValue()}</span>, //optional custom cell render
      },
      {
        accessorKey: "day_of_week", //simple recommended way to define a column
        header: "Day",
        editVariant: "select",
        editSelectOptions: daysOfTheWeekJustText,
        muiEditTextFieldProps: {
          select: true,
        },
        muiTableHeadCellProps: { sx: { color: "green" } }, //optional custom props
        Cell: ({ cell }) => <span>{cell.getValue()}</span>, //optional custom cell render
      },
      {
        accessorFn: (row) => row.episode_type?.episode_type_name, //alternate way
        header: "Type",
        id: "episode_type_name",
        editVariant: "select",
        editSelectOptions: episodeTypeNames,
        muiEditTextFieldProps: {
          select: true,
        },
        muiTableHeadCellProps: { sx: { color: "green" } }, //optional custom props
        Cell: ({ cell }) => <span>{cell.getValue()}</span>, //optional custom cell render
      },
      {
        accessorKey: "episode_type_number", //simple recommended way to define a column
        header: "#",
        muiTableHeadCellProps: { sx: { color: "green" } }, //optional custom props
        Cell: ({ cell }) => <span>{cell.getValue()}</span>, //optional custom cell render
      },
      {
        accessorKey: "episode_name", //simple recommended way to define a column
        header: "Name",
        muiTableHeadCellProps: { sx: { color: "green" } }, //optional custom props
        Cell: ({ cell }) => <span>{cell.getValue()}</span>, //optional custom cell render
      },
      {
        accessorKey: "source", //simple recommended way to define a column
        header: "Source",
        muiTableHeadCellProps: { sx: { color: "green" } }, //optional custom props
        Cell: ({ cell }) => <span>{cell.getValue()}</span>, //optional custom cell render
      },
      {
        accessorKey: "youtube_name", //simple recommended way to define a column
        header: "YT Name",
        muiTableHeadCellProps: { sx: { color: "green" } }, //optional custom props
        Cell: ({ cell }) => <span>{cell.getValue()}</span>, //optional custom cell render
      },
      {
        accessorFn: (row) => row.episode_status?.episode_status_name, //alternate way
        header: "Status",
        id: "episode_status_name",
        editVariant: "select",
        editSelectOptions: statusTypeNames,
        muiEditTextFieldProps: {
          select: true,
        },
        muiTableHeadCellProps: { sx: { color: "green" } }, //optional custom props
        Cell: ({ cell }) => <span>{cell.getValue()}</span>, //optional custom cell render
      },
    ],
    []
  );

  const { episodeTypes, statusTypes } = useMaintenance();

  //optionally, you can manage any/all of the table state yourself
  const [rowSelection, setRowSelection] = useState({});
  const [formState, setFormState] = useState(undefined);
  useEffect(() => {
    if (formState) {
      const editEpisode = async () => {
        const resultState = await updateEpisode(
          formState.dataConfig,
          formState.episodeId
        );
        if (resultState?.success) {
          toast.success("Successfully updated episode information.");
        } else {
        }
      };

      editEpisode();
    }
  }, [formState]);

  const handleSaveUser = ({ values, table, row }) => {
    const foundEpisodeType = episodeTypes?.find((episodeType) =>
      values?.episode_type_name || typeof values.episode_type === "string"
        ? episodeType.episode_type_name === values?.episode_type_name
        : episodeType.episode_type_name ===
          values?.episode_type?.episode_type_name
    );
    const foundStatusType = statusTypes?.find((statusType) =>
      values?.episode_status_name || typeof values.status_type === "string"
        ? statusType.episode_status_name === values.episode_status_name
        : statusType.episode_status_name ===
          values?.status_type?.episode_status_name
    );

    const structuredEpisodeTypeData = { ...row.original.episodetype };
    structuredEpisodeTypeData.$id =
      foundEpisodeType?.episode_type_id?.toString();
    structuredEpisodeTypeData.episode_type_id =
      foundEpisodeType?.episode_type_id;
    structuredEpisodeTypeData.episode_type_name =
      foundEpisodeType?.episode_type_name;

    const structuredEpisodeStatusData = { ...row.original.episodeStatus };

    structuredEpisodeStatusData.$id =
      foundStatusType?.episode_status_id?.toString();
    structuredEpisodeStatusData.episode_status_id =
      foundStatusType?.episode_status_id;
    structuredEpisodeStatusData.episode_status_name =
      foundStatusType?.episode_status_name;

    const dataConfig = {
      episode_number: parseInt(values.episode_number, 10),
      day_of_week: values.day_of_week,
      episode_type: structuredEpisodeTypeData,
      episode_type_number: parseInt(values.episode_type_number, 10),
      episode_name: values.episode_name,
      source: values.source,
      youtube_name: values.youtube_name,
      episode_status: structuredEpisodeStatusData,
    };

    setFormState({ dataConfig, episodeId: row?.original?.$id });
    table.setEditingRow(undefined);
  };

  const table = useMaterialReactTable({
    columns,
    data: allEpisodes,
    enableStickyFooter: true,
    enableStickyHeader: true,
    enableBottomToolbar: false,
    enableRowPinning: true,
    enableColumnOrdering: true, //enable some features
    enableRowSelection: true,
    enablePagination: false, //disable a default feature
    enableEditing: true,
    rowPinningDisplayMode: "select-sticky",
    getRowId: (row) => row.episode_number,
    onRowSelectionChange: setRowSelection, //hoist internal state to your own state (optional)
    initialState: { density: "compact" },
    onEditingRowSave: handleSaveUser,
    state: { rowSelection }, //manage your own state, pass it back to the table (optional)
    memoMode: "cells",
    muiTableBodyRowProps: ({ isDetailPanel, row, table }) => ({
      sx: {
        backgroundColor: row?.original?.episode_status?.associated_color,
        cursor: "pointer",
        height: row.getIsPinned() ? 37 : undefined,
        td: {
          color: row?.original?.episode_status?.text_color,
        },
      },
    }),
    renderRowActions: useCallback(
      ({ row, table }) => (
        <Box sx={{ display: "flex" }}>
          <Tooltip title="edit">
            <IconButton onClick={() => table.setEditingRow(row)}>
              <FaPen />
            </IconButton>
          </Tooltip>
        </Box>
      ),
      []
    ),
    renderEditRowDialogContent: ({ table, row, internalEditComponents }) => (
      <>
        <DialogTitle variant="h3">Edit Episode Details</DialogTitle>
        <DialogContent
          sx={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
          {internalEditComponents}
        </DialogContent>

        <DialogActions>
          <MRT_EditActionButtons variant="text" table={table} row={row} />
        </DialogActions>
      </>
    ),

  });

  return (
    <MaterialReactTable table={table} /> //other more lightweight MRT sub components also available
  );
};

export default EpisodeTableWrapper;
