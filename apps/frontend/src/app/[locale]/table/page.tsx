"use client";

import React, { useEffect, useState } from "react";

import { getProductOverview } from "../../api/products/products";
import { OverviewProduct } from "../../../types/products";

import {
  useReactTable,
  createColumnHelper,
  getCoreRowModel,
  flexRender,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";

import PageWrapper from "../components/PageWrapper";
import Link from "next/link";
import { useTranslations } from "next-intl";

const columnHelper = createColumnHelper<OverviewProduct>();

const columns = [
  columnHelper.accessor((row) => row.name, {
    id: "name",
    header: () => <span>Product</span>,
    cell: (info) => (
      <Link
        href={`/product/${info.cell.row.original.id}`}
        className="text-white"
      >
        {info.getValue()}
      </Link>
    ),
  }),
  columnHelper.accessor((row) => row.brand, {
    id: "brand",
    header: () => "brand",
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor((row) => row.capacity, {
    id: "capacity",
    header: () => <span>Capacity</span>,
    cell: (info) => <p>{info.getValue()}</p>,
  }),
  columnHelper.accessor((row) => row.price, {
    id: "price",
    header: () => "Price",
    cell: (info) => info.renderValue(),
    enableSorting: false,
    enableColumnFilter: false,
  }),
];

export default function Table() {
  const t = useTranslations("layout.table");
  const [products, setProducts] = useState<OverviewProduct[]>([]);
  const table = useReactTable({
    columns,
    data: products,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  const setProductsData = async () => {
    const products = await getProductOverview();
    setProducts(products);
  };

  useEffect(() => {
    setProductsData();
  }, []);

  return (
    <PageWrapper>
      {products.length > 0 ? (
        <section className="product-table-section">
          <table className="product-table">
            <thead className="product-table-thead">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th className={`product-table-th`} key={header.id}>
                      <span
                        className={`w-full ${
                          header.column.getCanSort() ? "cursor-pointer" : ""
                        }`}
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                        {{
                          asc: " 🔼",
                          desc: " 🔽",
                        }[header.column.getIsSorted() as string] ?? null}
                      </span>
                      {header.column.getCanFilter() && (
                        <input
                          className={"w-full"}
                          placeholder={t("filter.search")}
                          onChange={(e) =>
                            header.column.setFilterValue(e.target.value)
                          }
                        />
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr
                  className="product-table-tr"
                  key={row.id}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td className="px-6 py-4" key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      ) : (
        <p>{t("noProductsFound")}</p>
      )}
    </PageWrapper>
  );
}
