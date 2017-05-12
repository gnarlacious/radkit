---
title: Settings
type: global
---

Below is a table list of all the variables that are allowed to be overridden above the initial sass import.

## Colors

| Variable Name | Current Style |
| :------------- | :------------- |
| $brand-color-primary | #5F81E4 |
| $brand-color-secondary | #F67FF5 |
| $brand-color-tertiary | #47E4E0 |
| $brand-color-neutral | #CCCCCC |
| **Font Colors** | -- |
| $font-color-base | #434343 |
| $font-color-action | $brand-color-primary |
| **Element Colors** | -- |
| $border-color-base | $brand-color-neutral |
{: .table .-bordered }

## Typography

| Variable Name | Current Style |
| :------------- | :------------- |
| $font-family-primary |   sans-serif  |
| $font-family-secondary | serif       |
| $font-family-code |      monospace   |
| **Specific Styles** | -- |
| $font-family-base |        $font-family-primary    |
| $font-family-action |      $font-family-primary    |
| $font-family-heading |     $font-family-secondary  |
| $font-family-lead |        $font-family-secondary  |
| $font-family-blockquote |  $font-family-secondary  |
| $font-family-form |        $font-family-action     |
| **Font Weights** | -- |
| $font-weight-base |        400 |
| $font-weight-action |      400 |
| $font-weight-heading |     700 |
| $font-weight-lead |        400 |
| **Font Sizes** | -- |
| $font-size-base |      14px  |
| $line-height-base |    1.4   |
| $modular-scale-ratio | 1.333 |
| **Element Specific** | -- |
| $font-size-blockquote | 18px |
{: .table .-bordered }

## State Colors

| Variable Name | Current Style |
| :------------- | :------------- |
| **Error Colors** | -- |
| $state-error-color |   #DB4D4D                           |
| $state-error-bkg |     lighten($state-error-color, 30%)  |
| $state-error-border |  $state-error-color                |
| **Success Colors** | -- |
| $state-success-color |   #9dcc7a                             |
| $state-success-bkg |     lighten($state-success-color, 30%)  |
| $state-success-border |  $state-success-color                |
| **Warning Colors** | -- |
| $state-warning-color |   #FFB84D                             |
| $state-warning-bkg |     lighten($state-warning-color, 30%)  |
| $state-warning-border |  $state-warning-color                |
| **Info Colors** | -- |
| $state-info-color |  #4D94FF                           |
| $state-info-bkg |    lighten($state-info-color, 30%)   |
| $state-info-border | $state-info-color                 |
{: .table .-bordered }

## Button Colors

| Variable Name | Current Style |
| :------------- | :------------- |
| **Default** | -- |
| $button-default-bkg |    #fff              |
| $button-default-border | #ccc              |
| $button-default-color |  $font-color-base  |
| **Primary** | -- |
| $button-primary-bkg |    $brand-color-primary  |
| $button-primary-border | $brand-color-primary  |
| $button-primary-color |  #fff                  |
| **Secondary** | -- |
| $button-secondary-bkg |    $brand-color-tertiary  |
| $button-secondary-border | $brand-color-tertiary  |
| $button-secondary-color |  $font-color-base       |
| **Tertiary** | -- |
| $button-tertiary-bkg |     $brand-color-neutral  |
| $button-tertiary-border |  $brand-color-neutral  |
| $button-tertiary-color |   $font-color-base      |
{: .table .-bordered }
