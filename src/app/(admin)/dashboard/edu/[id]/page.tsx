"use client";
import logo from "@/images/logo.png";
import Image from "next/image";
import Swal from "sweetalert2";
import { useForm, SubmitHandler } from "react-hook-form";
import PostEditor from "@/components/UI/Admin/Post/PostEditor";
import { ChangeEventHandler, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DateRangePicker from "@/components/UI/Forms/DateRangePicker";
import useCourseDetail from "@/hooks/useCourseDetail";
import { replaceWithTimezone } from "@/libs/server/timezone";

enum SubCategory {
  Basic,
  Developer,
  Expert,
  OpenUp,
  SpecialCourse,
}

type Inputs = {
  category: "SW" | "HW";
  subcategory: string;
  thumbnailURL: string;
  recruitmentPeriod: {
    startDate: Date;
    endDate: Date;
  };
  progressPeriod: {
    startDate: Date;
    endDate: Date;
  };
  title: string;
  linkURL: string;
  content: string;
  recruitmentPeriodId: number;
  progressPeriodId: number;
};

type IPresignedResponse = {
  ok: boolean;
  presignedUrl: string;
  fileName: string;
};

export default function EditEducation({ params }: { params: { id: string } }) {
  const { register, handleSubmit, setValue } = useForm<Inputs>();
  const [category, setCategory] = useState(params.id);
  const [recruitmentPeriodStartDate, recruitmentPeriodSetStartDate] =
    useState<Date>();
  const [recruitmentPeriodEndDate, recruitmentPeriodSetEndDate] =
    useState<Date>();

  const [progressPeriodStartDate, progressPeriodSetStartDate] =
    useState<Date>();
  const [progressPeriodEndDate, progressPeriodSetEndDate] = useState<Date>();

  const { data, isLoading, revalidate } = useCourseDetail(params.id);
  useEffect(() => {
    revalidate();
  }, []);

  const router = useRouter();

  useEffect(() => {
    if (data) {
      setCategory(data.category);
      setValue("category", data.category);
      setValue("subcategory", data.subcategory);
      setValue("thumbnailURL", data.thumbnailURL);
      setValue("linkURL", data.linkURL);
      setValue("title", data.title);
      setValue("content", data.content);

      setValue(
        "recruitmentPeriod.startDate",
        new Date(data.recruitmentPeriod.startDate)
      );
      setValue(
        "recruitmentPeriod.endDate",
        new Date(data.recruitmentPeriod.endDate)
      );

      recruitmentPeriodSetStartDate(new Date(data.recruitmentPeriod.startDate));
      recruitmentPeriodSetEndDate(new Date(data.recruitmentPeriod.endDate));

      setValue(
        "progressPeriod.startDate",
        new Date(data.progressPeriod.startDate)
      );
      setValue("progressPeriod.endDate", new Date(data.progressPeriod.endDate));

      progressPeriodSetStartDate(new Date(data.progressPeriod.startDate));
      progressPeriodSetEndDate(new Date(data.progressPeriod.endDate));

      setValue("recruitmentPeriodId", data.recruitmentPeriodId);
      setValue("progressPeriodId", data.progressPeriodId);
    }
  }, [data]);

  useEffect(() => {
    register("content", { required: true });
    register("recruitmentPeriodId", { required: true });
    register("progressPeriodId", { required: true });
  }, [register]);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    data.recruitmentPeriod = {
      startDate: new Date(
        replaceWithTimezone(data.recruitmentPeriod.startDate)
      ),
      endDate: new Date(replaceWithTimezone(data.recruitmentPeriod.endDate)),
    };

    data.progressPeriod = {
      startDate: new Date(replaceWithTimezone(data.progressPeriod.startDate)),
      endDate: new Date(replaceWithTimezone(data.progressPeriod.endDate)),
    };

    const response = await (
      await fetch(`/api/edu/${params.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
    ).json();

    if (response.ok) {
      await Swal.fire({
        title: "SUCCESS",
        text: "Updated successfully",
        icon: "success",
      });

      router.back();
    } else {
      await Swal.fire({
        title: "ERROR",
        text: response.message,
        icon: "error",
      });
    }
  };

  const onEditorStateChange = (editorState: string) => {
    setValue("content", editorState);
  };

  const onCategoryChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const {
      target: { value },
    } = e;

    setCategory(value);
  };

  const onRecruitmentPeriodChange = (date: Date, field: "start" | "end") => {
    if (field === "start") {
      recruitmentPeriodSetStartDate(date);
      setValue("recruitmentPeriod.startDate", date);
    } else if (field === "end") {
      recruitmentPeriodSetEndDate(date);
      setValue("recruitmentPeriod.endDate", date);
    }
  };

  const onProgressPeriodChange = (date: Date, field: "start" | "end") => {
    if (field === "start") {
      progressPeriodSetStartDate(date);
      setValue("progressPeriod.startDate", date);
    } else if (field === "end") {
      progressPeriodSetEndDate(date);
      setValue("progressPeriod.endDate", date);
    }
  };

  const onThumbnailsChangeHandler = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const {
      target: { files },
    } = e;

    if (files) {
      let file: File = files[0];

      if (!file) {
        return;
      }

      const response = await fetch(`/api/presigned?file=${file.name}`);

      if (response.ok) {
        const data: IPresignedResponse = await response.json();

        const presignedUrl = data.presignedUrl;

        const signedResponse = await fetch(presignedUrl, {
          method: "PUT",
          body: file,
        });

        if (signedResponse.ok) {
          const signedImageURL = `https://d2p8484c990lgc.cloudfront.net/KLAB/${data.fileName}`;
          setValue("thumbnailURL", signedImageURL);
        }
      }
    }
  };

  return (
    <div className="flex items-center w-full flex-col justify-center py-20">
      <Image
        src={logo}
        alt="header logo"
        className="w-36 object-cover mb-5"
        priority
      />
      <h1 className="text-3xl text-zinc-600 font-bold mb-20">Edit Education</h1>

      <form
        className="space-y-3 flex flex-col w-[70%]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <span className="text-sm text-gray-400">Category</span>
        <select
          className="select select-bordered w-full max-w-xs"
          {...register("category", { required: true })}
          onChange={onCategoryChangeHandler}
          defaultValue={data?.category}
        >
          <option value="" disabled>
            Select Category
          </option>
          <option value="SW">SW</option>
          <option value="HW">HW</option>
        </select>

        <select
          className="select select-bordered w-full max-w-xs"
          {...register("subcategory", { required: true })}
          defaultValue={data?.subcategory}
        >
          <option value="" disabled>
            Select SubCategory
          </option>

          {category == "SW" && (
            <>
              <option value="Basic">Basic</option>
              <option value="Developer">Developer</option>
              <option value="Expert">Expert</option>
            </>
          )}

          {category == "HW" && (
            <>
              <option value="OpenUp">OpenUp</option>
              <option value="SpecialCourse">SpecialCourse</option>
            </>
          )}
        </select>

        <hr />
        <div className="py-5 flex flex-col">
          <span className="text-sm text-gray-400 mb-2">Thumbnail Image</span>
          <input
            type="file"
            accept="image/*"
            onChange={onThumbnailsChangeHandler}
          />
          <input type="text" hidden {...register("thumbnailURL")} />
        </div>
        <hr />

        <div className="py-5 flex flex-col">
          <span className="text-sm text-gray-400 mb-2">Direct Link URL</span>
          <input
            type="text"
            className="input input-bordered"
            placeholder="Direct Link here.. ex) https://~~~"
            {...register("linkURL", { required: true })}
          />
        </div>

        <hr />

        <div className="space-y-2">
          <span className="text-sm text-gray-400 mb-5">Recruitment Period</span>
          <DateRangePicker
            startDate={recruitmentPeriodStartDate}
            endDate={recruitmentPeriodEndDate}
            onChange={onRecruitmentPeriodChange}
          />
        </div>

        <div className="space-y-2">
          <span className="text-sm text-gray-400 mb-5">
            ProgressPeriod Period
          </span>
          <DateRangePicker
            startDate={progressPeriodStartDate}
            endDate={progressPeriodEndDate}
            onChange={onProgressPeriodChange}
          />
        </div>

        <hr />

        <input
          type="text"
          placeholder="post title here."
          className="input input-bordered"
          {...register("title", { required: true })}
        />
        {data && (
          <PostEditor
            onEditorStateChange={onEditorStateChange}
            content={data.content}
          />
        )}

        <div>
          <button className="mt-14 w-full btn btn-primary text-lg">Post</button>
        </div>
      </form>
    </div>
  );
}
