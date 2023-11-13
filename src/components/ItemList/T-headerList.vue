<template>
  <div>
    <thead class="w-full flex">
      <tr>
        <!-- Checkbox Column -->
        <th class="w-6 text-center font-semibold self-center">
          <div class="form-field-container null">
            <div class="field-wrapper flex flex-grow space-x-2">
              <slot name="startAction"></slot>
            </div>
          </div>
        </th>

        <!-- Product Name Column -->
        <th class="column w-36 text-center text-black self-center">
          <div class="table-header id-header">
            <div class="title"><span>Product Name</span></div>
            <div class="filter">
              <div class="form-field-container null">
                <div class="field-wrapper flex flex-grow space-x-2">
                  <Input
                    variantLabel="default"
                    variantInput="default"
                    placeholder="Name"
                    inputType="text"
                  ></Input>
                  <div class="field-border"></div>
                </div>
              </div>
            </div>
          </div>
        </th>

        <!-- Price Column -->
        <th class="column w-48 text-center text-black self-center">
          <div class="table-header id-header">
            <div class="title"><span>Price</span></div>
            <div class="filter">
              <div class="form-field-container null">
                <div class="field-wrapper flex flex-grow space-x-2">
                  <Input
                    variantLabel="default"
                    variantInput="default"
                    placeholder="From"
                    inputType="text"
                  ></Input>
                  <Input
                    variantLabel="default"
                    variantInput="default"
                    placeholder="To"
                    inputType="text"
                  ></Input>
                  <div class="field-border"></div>
                </div>
              </div>
            </div>
          </div>
        </th>

        <!-- SKU Column -->
        <th class="column w-36 text-center text-black self-center">
          <div class="table-header id-header">
            <div class="title"><span>SKU</span></div>
            <div class="filter">
              <div class="form-field-container null">
                <div class="field-wrapper flex flex-grow space-x-2">
                  <Input
                    variantLabel="default"
                    variantInput="default"
                    placeholder="SKU"
                    inputType="text"
                  ></Input>
                  <div class="field-border"></div>
                </div>
              </div>
            </div>
          </div>
        </th>

        <!-- Quantity Column -->
        <th class="column w-48 text-center text-black self-center">
          <div class="table-header id-header">
            <div class="title"><span>Qty</span></div>
            <div class="filter">
              <div class="form-field-container null">
                <div class="field-wrapper flex flex-grow space-x-2">
                  <Input
                    variantLabel="default"
                    variantInput="default"
                    placeholder="From"
                    inputType="text"
                  ></Input>
                  <Input
                    variantLabel="default"
                    variantInput="default"
                    placeholder="To"
                    inputType="text"
                  ></Input>
                  <div class="field-border"></div>
                </div>
              </div>
            </div>
          </div>
        </th>

        <!-- Status Column -->
        <th class="column w-36 text-center text-black self-center">
          <div class="table-header id-header">
            <div class="title"><span>Status</span></div>
            <div class="filter">
              <div class="form-field-container null">
                <div class="field-wrapper flex flex-grow space-x-2">
                  <slot name="endAction"></slot>
                  <div class="field-border"></div>
                </div>
              </div>
            </div>
          </div>
        </th>
      </tr>
    </thead>
  </div>
</template>

<script setup lang="ts">
import { Input } from "../index";
</script>
