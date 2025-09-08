import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar({
      setQuery,
}: {
      setQuery: (newVal: string) => void;
}) {
      return (
            <Paper
                  component="form"
                  className="w-full py-1 bg-transparent px-2 flex items-center rounded-md outline-1 outline-gray-400"
            >
                  <SearchIcon className=" text-gray-500 dark:text-white" />
                  <InputBase
                        className="ml-1 flex-grow  dark:text-white test-searchBarInput"
                        placeholder="Пошук за заголовком..."
                        onChange={(e) => setQuery(e.target.value)}
                        inputProps={{
                              "aria-label": "пошук карточок за заголовком",
                        }}
                  />
            </Paper>
      );
}
