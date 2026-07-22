import { useForm } from "react-hook-form";
import type { Product } from "../types/product";

interface FormValues {
  title: string;
  price: number;
  description: string;
  category: string;
  thumbnail: string;
}

interface Props {
  onAdd: (product: Product) => void;
  onClose: () => void;
}

export function ProductForm({ onAdd, onClose }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  function onSubmit(values: FormValues) {
    const newProduct: Product = {
      id: Date.now(), // temp local id, no backend persistence
      title: values.title,
      price: Number(values.price),
      description: values.description,
      category: values.category,
      thumbnail: values.thumbnail,
      images: [values.thumbnail],
    };
    onAdd(newProduct);
    reset();
    onClose();
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="border border-color-line bg-white p-6 space-y-4 mb-8"
    >
      <h2 className="font-font-display text-xl">Add a Product</h2>

      <div>
        <input
          placeholder="Product name"
          {...register("title", { required: "Product name is required" })}
          className="w-full border border-color-line px-3 py-2 text-sm focus:outline-none focus:border-color-accent"
        />
        {errors.title && (
          <p className="text-red-600 text-xs mt-1">{errors.title.message}</p>
        )}
      </div>

      <div>
        <input
          type="number"
          step="0.01"
          placeholder="Price"
          {...register("price", {
            required: "Price is required",
            min: { value: 0.01, message: "Price must be greater than 0" },
          })}
          className="w-full border border-color-line px-3 py-2 text-sm focus:outline-none focus:border-color-accent"
        />
        {errors.price && (
          <p className="text-red-600 text-xs mt-1">{errors.price.message}</p>
        )}
      </div>

      <div>
        <textarea
          placeholder="Description"
          rows={3}
          {...register("description", {
            required: "Description is required",
            minLength: { value: 10, message: "Description is too short" },
          })}
          className="w-full border border-color-line px-3 py-2 text-sm focus:outline-none focus:border-color-accent"
        />
        {errors.description && (
          <p className="text-red-600 text-xs mt-1">{errors.description.message}</p>
        )}
      </div>

      <div>
        <input
          placeholder="Category"
          {...register("category", { required: "Category is required" })}
          className="w-full border border-color-line px-3 py-2 text-sm focus:outline-none focus:border-color-accent"
        />
        {errors.category && (
          <p className="text-red-600 text-xs mt-1">{errors.category.message}</p>
        )}
      </div>

      <div>
        <input
          placeholder="Image URL"
          {...register("thumbnail", {
            required: "Image URL is required",
            pattern: {
              value: /^https?:\/\/.+/,
              message: "Must be a valid URL",
            },
          })}
          className="w-full border border-color-line px-3 py-2 text-sm focus:outline-none focus:border-color-accent"
        />
        {errors.thumbnail && (
          <p className="text-red-600 text-xs mt-1">{errors.thumbnail.message}</p>
        )}
      </div>

      <div className="flex gap-2">
        <button
          type="submit"
          className="text-sm bg-green-700 text-white px-4 py-2 hover:opacity-90"
        >
          Add Product
        </button>
        <button
          type="button"
          onClick={onClose}
          className="text-sm border border-color-line px-4 py-2 hover:border-color-accent"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}