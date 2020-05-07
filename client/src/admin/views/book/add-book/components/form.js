import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import ButtonToggle from "./button-toggle";
import { Checkbox, CustomInputField, TextArea, UploadFile } from "components/field";
import { GET_AUTHORS } from "api/author/author-list";
import { GET_CATEGORIES } from "api/category/category-list";
import Icon from "components/icon";
import { SearchField } from "components/search";
import { Spinner } from "components/spinner";

const Form = ({
  error,
  title,
  setTitle,
  description,
  setDescription,
  authorIds,
  setAuthorIds,
  categoryId,
  setCategoryId
}) => {
  const { data: catList, loading: catLoading, error: catError } = useQuery(GET_CATEGORIES);
  const { data: authorList, loading: authorLoading, error: authorError } = useQuery(GET_AUTHORS);

  const [authorActive, setAuthorActive] = useState(true);
  const [categoryActive, setCategoryActive] = useState(true);
  const [uploadImageActive, setUploadImageActive] = useState(true);

  const selectAuthor = (e, id) => {
    let checkArray = [...authorIds];
    if (e.target.checked) {
      checkArray = [...checkArray, id];
    } else {
      const index = checkArray.indexOf(id);
      checkArray.splice(index, 1);
    }
    setAuthorIds(checkArray);
  };

  return (
    <div className="flex bg-white text-gray-900">
      <div className="mt-3 px-3 max-w-xl mx-auto w-full">
        <div>
          <CustomInputField
            placeholder="Add a title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            error={error}
            errorType="Book title"
          />
        </div>
        <div className="mt-2">
          <TextArea
            rows="20"
            placeholder="Add a description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            error={error}
            errorType="Book description"
          />
        </div>
      </div>
      <aside
        style={{ height: "calc(100vh - 127px)" }}
        className="bg-gray-50 max-w-xs w-full border-l border-gray-200"
      >
        <div className="px-6 my-4">
          <div className="border-b border-gray-200">
            <ButtonToggle
              toggleDropdown={setAuthorActive}
              dropdownState={authorActive}
              title="Author"
            />
            <div
              className={`${
                authorActive ? "block" : "hidden"
              } mb-1 relative h-40 overflow-y-hidden flex flex-col`}
            >
              <div className="p-1">
                <SearchField type="text" placeholder="Search" size="sm" />
              </div>
              <ul className="mt-2 text-sm flex-1 overflow-y-auto">
                {(authorLoading || authorError) && <Spinner />}
                {!authorLoading &&
                  !authorError &&
                  authorList.authors.map(author => (
                    <div key={author._id} className="px-2 py-1.5">
                      <Checkbox
                        id={author._id}
                        checked={!!authorIds.find(ch => ch === author._id)}
                        onChange={e => selectAuthor(e, author._id)}
                        title={author.name}
                      />
                    </div>
                  ))}
              </ul>
            </div>
          </div>
          <div className="border-b border-gray-200">
            <ButtonToggle
              toggleDropdown={setCategoryActive}
              dropdownState={categoryActive}
              title="Category"
            />
            <div
              className={`${
                categoryActive ? "block" : "hidden"
              } mb-1 relative h-40 overflow-y-hidden flex flex-col`}
            >
              <div className="p-1">
                <SearchField type="text" placeholder="Search" size="sm" />
              </div>
              <ul className="mt-2 text-sm flex-1 overflow-y-auto">
                {(catLoading || catError) && <Spinner />}
                {!catLoading &&
                  !catError &&
                  catList.categories.map(category => (
                    <li
                      key={category._id}
                      id={category._id}
                      onClick={e => setCategoryId(e.target.id)}
                      className={`${category._id === categoryId &&
                        "bg-gray-100"} flex items-center justify-between px-2 py-1.5 rounded hover:bg-gray-100 transition duration-150 ease-in-out cursor-pointer`}
                    >
                      {category.title}
                      {category._id === categoryId && (
                        <Icon icon="check" className="h-5 w-5 text-indigo-600" />
                      )}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <div className="border-b border-gray-200">
            <ButtonToggle
              toggleDropdown={setUploadImageActive}
              dropdownState={uploadImageActive}
              title="Upload book cover"
            />
            <div className={`${uploadImageActive ? "block" : "hidden"} p-1`}>
              <UploadFile />
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Form;
