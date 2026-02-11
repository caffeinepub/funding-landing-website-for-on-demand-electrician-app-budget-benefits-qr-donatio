# Custom Domain Setup for ElectroBeez

This guide explains how to configure a custom domain for your ElectroBeez application hosted on the Internet Computer.

## Overview

Your ElectroBeez application is deployed as a canister on the Internet Computer blockchain. To make it accessible via your custom domain, you need to:

1. Configure DNS records at your domain registrar
2. Register your domain with the Internet Computer boundary nodes
3. Update your canister settings

## Prerequisites

- A registered domain name (e.g., `electrobeez.com`)
- Access to your domain's DNS settings
- Your canister ID (found in `.dfx/local/canister_ids.json` or via `dfx canister id backend`)

## Step 1: Configure DNS Records

Log in to your domain registrar (GoDaddy, Namecheap, Cloudflare, etc.) and add the following DNS records:

### For Root Domain (e.g., `electrobeez.com`)

Add an **A record**:
- **Type**: A
- **Name**: `@` (or leave blank for root domain)
- **Value**: `147.75.83.255`
- **TTL**: 3600 (or automatic)

### For Subdomain (e.g., `www.electrobeez.com`)

Add a **CNAME record**:
- **Type**: CNAME
- **Name**: `www` (or your preferred subdomain)
- **Value**: `icp1.io`
- **TTL**: 3600 (or automatic)

> **Note**: DNS propagation can take 24-48 hours, but typically completes within a few hours.

## Step 2: Register Domain with IC Boundary Nodes

Once your DNS records are configured, you need to register your custom domain with the Internet Computer boundary nodes.

### Option A: Using the IC Dashboard (Recommended)

1. Visit the [Internet Computer Dashboard](https://dashboard.internetcomputer.org/)
2. Connect your Internet Identity
3. Navigate to your canister
4. Go to "Custom Domains" section
5. Click "Add Custom Domain"
6. Enter your domain: `DOMAIN` (e.g., `electrobeez.com`)
7. Enter your canister ID: `CANISTER_ID`
8. Submit the registration

### Option B: Using dfx Command Line

Run the following command in your project directory:

