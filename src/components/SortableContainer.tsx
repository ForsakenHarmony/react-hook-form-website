import * as React from "react"
import Sortable from "react-sortablejs"
import { Animate } from "react-simple-animate"
import styled from "styled-components"
import colors from "../styles/colors"
import generic from "../data/generic"

const List = styled.li`
  border: 1px solid ${colors.lightBlue};
  padding: 14px 14px 14px 50px;
  border-radius: 4px;
  margin-bottom: 10px;
  background: ${colors.primary};
  cursor: move;
  position: relative;
  list-style: none;

  & > svg {
    fill: white;
    display: inline-block;
    width: 20px;
    position: absolute;
    left: 15px;
    top: 17px;
  }
`

const EditPanel = styled.div`
  float: right;

  & > button {
    position: relative;
    color: white;
    top: -2px;
    font-size: 14px;
    border-radius: 4px;
    cursor: pointer;
    padding: 1px 8px;
    background: ${colors.lightBlue};
    border: 1px solid transparent;
    text-transform: uppercase;
    letter-spacing: 1px;

    &:hover {
      background: ${colors.primary};
      border: 1px solid ${colors.secondary};
    }
  }

  & > button:first-child {
    margin-right: 14px;
  }
`

const SortableWrapper = styled.div`
  margin-top: 30px;

  & > ul {
    margin-left: 0;
    padding-left: 0;
  }
`

export default function SortableContainer({
  updateFormData,
  formData,
  editIndex,
  setEditIndex,
  setFormData,
  reset,
  currentLanguage,
}: {
  updateFormData: Function
  formData: any
  editIndex: number
  setEditIndex: Function
  setFormData: Function
  reset: Function
  currentLanguage: string
}) {
  return (
    <SortableWrapper>
      <Sortable
        tag="ul"
        onChange={data => {
          updateFormData(
            data.reduce((previous, current) => {
              return [
                ...previous,
                formData[formData.findIndex(data => current === data.name)],
              ]
            }, [])
          )
        }}
      >
        {formData.map((field, index) => {
          return (
            <Animate
              play
              start={{
                opacity: 0,
              }}
              end={{
                opacity: 1,
              }}
              key={field.name}
              render={({ style }) => (
                <List style={style} data-id={field.name}>
                  <svg viewBox="0 0 1024 1280">
                    <circle cx="319.5" cy="155.5" r="104.1" />
                    <path d="M413.6,155.5c-0.3,38.9-24.8,75.2-61.8,88.4c-37.5,13.4-79.4,1.8-105-28.7     c-25.4-30.3-28.1-75.2-7.6-108.7c20.1-33.1,60.2-51.1,98.3-43.4C381.4,72,413.3,110.8,413.6,155.5c0.1,12.9,20.1,12.9,20,0     c-0.3-47.8-30.4-90.6-75.2-107.3c-44.3-16.4-96.6-2.2-126.5,34.4c-30.4,37.2-35.1,90.6-9.9,132c25,41.1,73.9,62,120.9,52.6     c52.5-10.6,90.4-58.6,90.8-111.7C433.7,142.6,413.7,142.6,413.6,155.5z" />
                    <circle cx="319.5" cy="512" r="104.1" />
                    <path d="M413.6,512c-0.3,38.9-24.8,75.2-61.8,88.4c-37.5,13.4-79.4,1.8-105-28.7c-25.4-30.3-28.1-75.2-7.6-108.7     c20.1-33.1,60.2-51.1,98.3-43.4C381.4,428.5,413.3,467.3,413.6,512c0.1,12.9,20.1,12.9,20,0c-0.3-47.8-30.4-90.6-75.2-107.3     c-44.3-16.4-96.6-2.2-126.5,34.4c-30.4,37.2-35.1,90.6-9.9,132c25,41.1,73.9,62,120.9,52.6c52.5-10.6,90.4-58.6,90.8-111.7     C433.7,499.1,413.7,499.1,413.6,512z" />
                    <circle cx="319.5" cy="868.5" r="104.1" />
                    <path d="M413.6,868.5c-0.3,38.9-24.8,75.2-61.8,88.4c-37.5,13.4-79.4,1.8-105-28.7     c-25.4-30.3-28.1-75.2-7.6-108.7c20.1-33.1,60.2-51.1,98.3-43.4C381.4,785,413.3,823.8,413.6,868.5c0.1,12.9,20.1,12.9,20,0     c-0.3-47.8-30.4-90.6-75.2-107.3c-44.3-16.4-96.6-2.2-126.5,34.4c-30.4,37.2-35.1,90.6-9.9,132c25,41.1,73.9,62,120.9,52.6     c52.5-10.6,90.4-58.6,90.8-111.7C433.7,855.6,413.7,855.6,413.6,868.5z" />
                    <circle cx="704.5" cy="155.5" r="104.1" />
                    <path d="M798.6,155.5c-0.3,38.9-24.8,75.2-61.8,88.4c-37.5,13.4-79.4,1.8-105-28.7     c-25.4-30.3-28.1-75.2-7.6-108.7c20.1-33.1,60.2-51.1,98.3-43.4C766.4,72,798.3,110.8,798.6,155.5c0.1,12.9,20.1,12.9,20,0     c-0.3-47.8-30.4-90.6-75.2-107.3c-44.3-16.4-96.6-2.2-126.5,34.4c-30.4,37.2-35.1,90.6-9.9,132c25,41.1,73.9,62,120.9,52.6     c52.5-10.6,90.4-58.6,90.8-111.7C818.7,142.6,798.7,142.6,798.6,155.5z" />
                    <circle cx="704.5" cy="512" r="104.1" />
                    <path d="M798.6,512c-0.3,38.9-24.8,75.2-61.8,88.4c-37.5,13.4-79.4,1.8-105-28.7c-25.4-30.3-28.1-75.2-7.6-108.7     c20.1-33.1,60.2-51.1,98.3-43.4C766.4,428.5,798.3,467.3,798.6,512c0.1,12.9,20.1,12.9,20,0c-0.3-47.8-30.4-90.6-75.2-107.3     c-44.3-16.4-96.6-2.2-126.5,34.4c-30.4,37.2-35.1,90.6-9.9,132c25,41.1,73.9,62,120.9,52.6c52.5-10.6,90.4-58.6,90.8-111.7     C818.7,499.1,798.7,499.1,798.6,512z" />
                    <circle cx="704.5" cy="868.5" r="104.1" />
                    <path d="M798.6,868.5c-0.3,38.9-24.8,75.2-61.8,88.4c-37.5,13.4-79.4,1.8-105-28.7c-25.4-30.3-28.1-75.2-7.6-108.7     c20.1-33.1,60.2-51.1,98.3-43.4C766.4,785,798.3,823.8,798.6,868.5c0.1,12.9,20.1,12.9,20,0c-0.3-47.8-30.4-90.6-75.2-107.3     c-44.3-16.4-96.6-2.2-126.5,34.4c-30.4,37.2-35.1,90.6-9.9,132c25,41.1,73.9,62,120.9,52.6c52.5-10.6,90.4-58.6,90.8-111.7     C818.7,855.6,798.7,855.6,798.6,868.5z" />
                  </svg>
                  {field.name}

                  <EditPanel>
                    <button
                      style={{
                        ...(editIndex === index
                          ? { background: colors.lightPink }
                          : null),
                      }}
                      onClick={() => {
                        if (editIndex === index) {
                          setEditIndex(-1)
                          setFormData({})
                          reset()
                        } else {
                          const index = formData.findIndex(
                            data => field.name === data.name
                          )
                          setFormData(formData[index])
                          setEditIndex(index)
                        }
                      }}
                    >
                      {editIndex === index
                        ? generic.cancelEdit[currentLanguage]
                        : generic.edit[currentLanguage]}
                    </button>
                    <button
                      onClick={() => {
                        if (window.confirm("Are you sure to delete?")) {
                          const index = formData.findIndex(
                            data => field.name === data.name
                          )

                          if (index >= 0) {
                            updateFormData([
                              ...formData.slice(0, index),
                              ...formData.slice(index + 1),
                            ])
                            setEditIndex(-1)

                            if (editIndex === index) {
                              setFormData({})
                            }
                          }
                        }
                      }}
                    >
                      {generic.delete[currentLanguage]}
                    </button>
                  </EditPanel>
                </List>
              )}
            />
          )
        })}
      </Sortable>

      {(formData || []).length > 0 && (
        <EditPanel>
          <button
            style={{
              marginRight: 15,
            }}
          >
            {generic.deleteAll[currentLanguage]}
          </button>
        </EditPanel>
      )}
    </SortableWrapper>
  )
}
