"use client";
import { SelectOptionType } from "@/types/utils";
import { classNames } from "@/utils";
import { Combobox } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import React, { useState } from "react";

interface SelectProps {
  label: string;
  options: SelectOptionType[];
  value: SelectOptionType | null;
  setValue: (val: { id: string; name: string }) => void;
}

const Select: React.FC<SelectProps> = ({ label, options, value, setValue }) => {
  const [query, setQuery] = useState("");

  const filteredOptions =
    query === ""
      ? options
      : options.filter((option) => {
          return option.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Combobox as="div" value={value} onChange={setValue}>
      <Combobox.Label className="block text-sm font-medium leading-6">
        {label}
      </Combobox.Label>
      <div className="relative mt-2">
        <Combobox.Button className="w-full">
          <Combobox.Input
            className="peer block w-full rounded-md border border-gray-700 bg-transparent px-6 py-4 text-base/6 text-white ring-4 ring-transparent transition focus:border-white focus:outline-none focus:ring-white/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
            onChange={(event) => setQuery(event.target.value)}
            displayValue={(option: any) => option?.name}
          />
        </Combobox.Button>
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronUpDownIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Combobox.Button>

        <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-gray-900 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          {filteredOptions.map((option) => (
            <Combobox.Option
              key={option.id}
              value={option}
              className={({ active }) =>
                classNames(
                  "relative cursor-default select-none py-2 pl-8 pr-4 text-white",
                  active ? "bg-slate-600" : "",
                )
              }
            >
              {({ active }) => (
                <>
                  <span
                    className={classNames(
                      "block truncate capitalize",
                      option.id === value?.id ? "font-semibold" : "",
                    )}
                  >
                    {option.name}
                  </span>

                  {option.id === value?.id && (
                    <span
                      className={classNames(
                        "absolute inset-y-0 left-0 flex items-center pl-1.5",
                        active ? "text-white" : "text-gray-200",
                      )}
                    >
                      <CheckIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  )}
                </>
              )}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </div>
    </Combobox>
  );
};

export default Select;
