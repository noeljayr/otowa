export interface Model {
  id: string;
  name: string;
  version: string;
  provider: string;
  logo: string;
  best_for: string;
}

export interface Pagination {
  page: number;
  page_size: number;
  total_items: number;
  total_pages: number;
  has_next: boolean;
  has_previous: boolean;
}

export interface ModelsResponse {
  data: Model[];
  pagination: Pagination;
}
