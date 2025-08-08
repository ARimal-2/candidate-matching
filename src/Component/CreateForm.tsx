import { useState } from 'react';
import { Job } from '@/types/job';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetClose,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface Props {
  onSubmit: (job: Job) => void;
}

const CreateJobForm = ({ onSubmit }:Props) => {
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    repolink: '',
    openings: '',
    type: '',
    experience: '',
    description: '',
    deadline: '',
    status: 'active',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const [fileSize, setFileSize] = useState<number | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFileName(file.name);
      setFileSize(file.size);
    }
  };
  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newJob: Job = {
      id: Date.now(),
      title: formData.title,
      location: formData.location,
      repolink: formData.repolink,
      openings: Number(formData.openings),
      type: formData.type,
      experience: Number(formData.experience),
      description: formData.description,
      deadline: new Date(formData.deadline),
      status: formData.status as 'active' | 'closed',
    };

    onSubmit(newJob);

    // Reset form
    setFormData({
      title: '',
      location: '',
      repolink: '',
      openings: '',
      type: '',
      experience: '',
      description: '',
      deadline: '',
      status: 'active',
    });
  };

  return (
    <SheetContent side="right" className="!w-[486px] gap-[22px] !max-w-[486px]">
      <div className="px-6 py-6 gap-6">
        <SheetHeader>
          <SheetTitle>Create Job Post</SheetTitle>
        </SheetHeader>

        <form onSubmit={handleSubmit} className="grid gap-6 py-4 px-2">
          <div className="grid gap-2">
            <Label htmlFor="title">
              Job Title<span className="text-red-500">*</span>
            </Label>
            <Input
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g. Full Stack Engineer"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="location">
              Job Location<span className="text-red-500">*</span>
            </Label>
            <Input
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="e.g. Thapathali, Kathmandu"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="repolink">
              Repository Link<span className="text-red-500">*</span>
            </Label>
            <Input
              id="repolink"
              name="repolink"
              value={formData.repolink}
              onChange={handleChange}
              placeholder="e.g. https://sharepoint.com/folder/..."
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="openings">
              Total Openings<span className="text-red-500">*</span>
            </Label>
            <input
              id="openings"
              name="openings"
              placeholder='Select Openings'
              value={formData.openings}
              onChange={handleChange}
              className="w-full h-11 border border-gray-300 rounded-lg px-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            ></input>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="type">
              Employment Type<span className="text-red-500">*</span>
            </Label>
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full h-11 border border-gray-300 rounded-lg px-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            >
              <option value="">Select type</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Intern">Intern</option>
            </select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="experience">
              Minimum Experience<span className="text-red-500">*</span>
            </Label>
            <Input
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="Select Years"
              required
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="description">
              Job Description <span className="text-red-500">*</span>
            </Label>
            <div
              className="relative rounded-lg flex items-center justify-start cursor-pointer transition hover:bg-orange-50 h-24 border border-dashed px-4"
              onClick={() =>
                !uploadedFileName &&
                document.getElementById('description')?.click()
              }
            >
              <input
                id="description"
                name="description"
                type="file"
                className="hidden"
                onChange={handleFileUpload}
                required
              />

              {uploadedFileName ? (
                <>
                  {/* Cross button top-left */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent triggering file input click
                      setUploadedFileName(null);
                      setFileSize(null);
                      const input = document.getElementById('description') as HTMLInputElement | null;
                      if (input) input.type = '';
                    }}
                    aria-label="Remove uploaded file"
                    className="absolute top-1 left-100 w-[10.49px] h-[10.49px] flex items-center justify-center text-gray-400 hover:text-red-500 font-bold text-lg border border-transparent"
                  >
                    &times;
                  </button>

                  {/* File name and icon top-left (next to cross, shifted right) */}
                  <div className="absolute py-2 px-3 top-1 left-1 flex items-center gap-2 text-gray-700 font-medium max-w-[calc(100%-70px)] truncate">
                    <svg
                      width="12"
                      height="16"
                      viewBox="0 0 12 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="flex-shrink-0"
                    >
                      <path
                        d="M3.99935 8.66671H7.99935M3.99935 11.3334H5.99935M0.666016 2.66671V13.3334C0.666016 13.687 0.806491 14.0261 1.05654 14.2762C1.30659 14.5262 1.64573 14.6667 1.99935 14.6667H9.99935C10.353 14.6667 10.6921 14.5262 10.9422 14.2762C11.1922 14.0261 11.3327 13.687 11.3327 13.3334V5.56137C11.3327 5.38375 11.2971 5.20791 11.2282 5.0442C11.1593 4.88049 11.0584 4.7322 10.9313 4.60804L7.97135 1.71337C7.72226 1.46981 7.38773 1.33342 7.03935 1.33337H1.99935C1.64573 1.33337 1.30659 1.47385 1.05654 1.7239C0.806491 1.97395 0.666016 2.31309 0.666016 2.66671Z"
                        stroke="#FF7614"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.33203 1.33337V4.00004C7.33203 4.35366 7.47251 4.6928 7.72256 4.94285C7.9726 5.1929 8.31174 5.33337 8.66536 5.33337H11.332"
                        stroke="#FF7614"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <span className="truncate">{uploadedFileName}</span>
                  </div>

                  {/* File size below filename, aligned left under filename */}
                  {fileSize != null && (
                    <div className="absolute py-.5 top-9 left-10 text-[14px] text-gray-600 select-none">
                      {formatFileSize(fileSize)}
                    </div>
                  )}
                </>
              ) : (
                <span className="text-sm text-gray-500 flex justify-center">
                  <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.16699 10.6693V11.3333C3.16699 11.8638 3.37771 12.3725 3.75278 12.7475C4.12785 13.1226 4.63656 13.3333 5.16699 13.3333H11.8337C12.3641 13.3333 12.8728 13.1226 13.2479 12.7475C13.6229 12.3725 13.8337 11.8638 13.8337 11.3333V10.6667M8.50033 10.3333V3M8.50033 3L10.8337 5.33333M8.50033 3L6.16699 5.33333" stroke="#FF7614" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
Drag file here or click to upload
                </span>
              )}
            </div>
          </div>

  <div className="grid gap-2">
  <Label htmlFor="deadline">
    Application Deadline<span className="text-red-500">*</span>
  </Label>

  <div className="relative max-w-sm">
    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">

    </div>
    
    <input
      id="datepicker-autohide"
      type="date"
      name="deadline"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Select date"
      onChange={handleChange}
      value={formData.deadline}
      autoComplete="off"
      data-datepicker
      data-datepicker-autohide
    />
  </div>
</div>



     
          <SheetFooter className="py-[26px]">
            <Button
              type="submit"
              className="bg-[#FF7614] hover:bg-[#e86510] text-white font-semibold"
            >
              Create Post
            </Button>
            <SheetClose asChild />
          </SheetFooter>
        </form>
      </div>
    </SheetContent>
  );
};

export default CreateJobForm;
